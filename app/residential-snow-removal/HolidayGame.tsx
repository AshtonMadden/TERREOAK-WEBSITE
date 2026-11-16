"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * "Present Catch": a small holiday game for the snow page. Slide the elf to catch falling presents,
 * grab gold stars for bonus points and dodge the coal. Drawn on a canvas with flat brand colours.
 * It only runs while the visitor is playing and the game is on screen.
 */

type Kind = "present" | "star" | "coal";
type Item = { kind: Kind; x: number; y: number; vy: number; size: number; spin: number; rot: number; color: string; ribbon: string };
type Pop = { x: number; y: number; life: number; text: string; color: string };
type Flake = { x: number; y: number; r: number; v: number };
type Status = "idle" | "playing" | "over";

const WRAPS: [string, string][] = [
  ["#ccea8d", "#005148"],
  ["#019587", "#ffffff"],
  ["#d94c4c", "#ffffff"],
  ["#ffffff", "#d94c4c"],
  ["#a6bc09", "#ffffff"],
];
const BEST_KEY = "terreoak-present-catch-best";
const LIVES = 3;

export default function HolidayGame() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(LIVES);
  // This component only ever renders in the browser, so reading the saved best score here is safe.
  const [best, setBest] = useState(() => {
    try {
      return Number(window.localStorage.getItem(BEST_KEY)) || 0;
    } catch {
      return 0; // Private browsing: the best score just won't be remembered.
    }
  });

  // Everything the animation loop touches lives in a ref so React state changes never restart it.
  const game = useRef({
    status: "idle" as Status,
    w: 600,
    h: 520,
    elfX: 300,
    targetX: 300,
    keys: 0,
    items: [] as Item[],
    pops: [] as Pop[],
    flakes: [] as Flake[],
    score: 0,
    lives: LIVES,
    time: 0,
    nextSpawn: 0,
    visible: true,
    hurt: 0,
  });

  const start = useCallback(() => {
    const g = game.current;
    g.items = [];
    g.pops = [];
    g.score = 0;
    g.lives = LIVES;
    g.time = 0;
    g.nextSpawn = 0.6;
    g.hurt = 0;
    g.elfX = g.targetX = g.w / 2;
    g.status = "playing";
    setScore(0);
    setLives(LIVES);
    setStatus("playing");
    canvasRef.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;
    const g = game.current;

    const resize = () => {
      const w = wrap.clientWidth;
      const h = Math.round(Math.min(540, Math.max(380, w * 0.95)));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const scale = w / (g.w || w);
      g.elfX *= scale;
      g.targetX *= scale;
      g.w = w;
      g.h = h;
      g.flakes = Array.from({ length: Math.round(w / 22) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 1.8,
        v: 14 + Math.random() * 26,
      }));
    };
    resize();
    g.elfX = g.targetX = g.w / 2;
    const resizer = new ResizeObserver(resize);
    resizer.observe(wrap);

    const watcher = new IntersectionObserver(([entry]) => {
      g.visible = entry.isIntersecting;
    });
    watcher.observe(canvas);

    const pointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      g.targetX = event.clientX - rect.left;
    };
    const keyDown = (event: KeyboardEvent) => {
      if (g.status !== "playing") return;
      if (event.key === "ArrowLeft" || event.key === "a") g.keys = -1;
      else if (event.key === "ArrowRight" || event.key === "d") g.keys = 1;
      else return;
      event.preventDefault();
    };
    const keyUp = (event: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", "a", "d"].includes(event.key)) g.keys = 0;
    };
    canvas.addEventListener("pointermove", pointer);
    canvas.addEventListener("pointerdown", pointer);
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    const spawn = () => {
      const level = Math.min(1, g.time / 70);
      const roll = Math.random();
      const kind: Kind = roll < 0.14 + level * 0.16 ? "coal" : roll > 0.94 ? "star" : "present";
      const size = kind === "present" ? 30 + Math.random() * 12 : kind === "star" ? 30 : 28;
      const [color, ribbon] = WRAPS[Math.floor(Math.random() * WRAPS.length)];
      g.items.push({
        kind,
        size,
        color,
        ribbon,
        x: 28 + Math.random() * (g.w - 56),
        y: -size,
        vy: (120 + level * 250 + Math.random() * 50) * (g.h / 520),
        rot: Math.random() * 0.6 - 0.3,
        spin: Math.random() * 1.6 - 0.8,
      });
      g.nextSpawn = 1.05 - level * 0.62 + Math.random() * 0.25;
    };

    const endGame = () => {
      g.status = "over";
      setStatus("over");
      setBest((previous) => {
        const next = Math.max(previous, g.score);
        try {
          window.localStorage.setItem(BEST_KEY, String(next));
        } catch {
          // Ignore: see above.
        }
        return next;
      });
    };

    const loseLife = (x: number, y: number) => {
      g.lives -= 1;
      g.hurt = 0.35;
      g.pops.push({ x, y, life: 0.9, text: "Oops!", color: "#ff8f8f" });
      setLives(g.lives);
      if (g.lives <= 0) endGame();
    };

    const update = (dt: number) => {
      for (const flake of g.flakes) {
        flake.y += flake.v * dt;
        if (flake.y > g.h) {
          flake.y = -4;
          flake.x = Math.random() * g.w;
        }
      }
      for (const pop of g.pops) {
        pop.life -= dt;
        pop.y -= 36 * dt;
      }
      g.pops = g.pops.filter((pop) => pop.life > 0);
      g.hurt = Math.max(0, g.hurt - dt);
      if (g.status !== "playing") return;

      g.time += dt;
      if (g.keys) g.targetX += g.keys * 560 * dt;
      g.targetX = Math.max(42, Math.min(g.w - 42, g.targetX));
      g.elfX += (g.targetX - g.elfX) * Math.min(1, dt * 16);

      g.nextSpawn -= dt;
      if (g.nextSpawn <= 0) spawn();

      const ground = g.h - 34;
      const catchY = ground - 84;
      const kept: Item[] = [];
      for (const item of g.items) {
        item.y += item.vy * dt;
        item.rot += item.spin * dt;
        const bottom = item.y + item.size / 2;
        const inBasket = bottom >= catchY && item.y - item.size / 2 <= catchY + 20 && Math.abs(item.x - g.elfX) < 40 + item.size * 0.3;
        if (inBasket) {
          if (item.kind === "coal") {
            loseLife(item.x, catchY - 10);
          } else {
            const points = item.kind === "star" ? 5 : 1;
            g.score += points;
            setScore(g.score);
            g.pops.push({ x: item.x, y: catchY - 10, life: 0.8, text: `+${points}`, color: item.kind === "star" ? "#f5c542" : "#ccea8d" });
          }
          continue;
        }
        if (bottom >= ground) {
          if (item.kind === "present") loseLife(item.x, ground - 24);
          continue;
        }
        kept.push(item);
      }
      g.items = g.status === "playing" ? kept : [];
    };

    const rounded = (x: number, y: number, w: number, h: number, r: number) => {
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, r);
      ctx.fill();
    };

    const drawTree = (x: number, base: number, s: number) => {
      ctx.fillStyle = "#3a2c1f";
      ctx.fillRect(x - 4 * s, base - 14 * s, 8 * s, 14 * s);
      ctx.fillStyle = "#005148";
      for (let i = 0; i < 3; i += 1) {
        const top = base - (78 - i * 20) * s;
        const half = (20 + i * 10) * s;
        ctx.beginPath();
        ctx.moveTo(x, top);
        ctx.lineTo(x + half, top + 34 * s);
        ctx.lineTo(x - half, top + 34 * s);
        ctx.closePath();
        ctx.fill();
      }
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(x, base - 78 * s);
      ctx.lineTo(x + 9 * s, base - 62 * s);
      ctx.lineTo(x - 9 * s, base - 62 * s);
      ctx.closePath();
      ctx.fill();
    };

    const drawItem = (item: Item) => {
      ctx.save();
      ctx.translate(item.x, item.y);
      ctx.rotate(item.rot);
      const s = item.size;
      if (item.kind === "present") {
        ctx.fillStyle = item.color;
        rounded(-s / 2, -s / 2, s, s, 5);
        ctx.fillStyle = item.ribbon;
        ctx.fillRect(-s * 0.09, -s / 2, s * 0.18, s);
        ctx.fillRect(-s / 2, -s * 0.09, s, s * 0.18);
        ctx.beginPath();
        ctx.arc(-s * 0.16, -s / 2 - s * 0.08, s * 0.14, 0, Math.PI * 2);
        ctx.arc(s * 0.16, -s / 2 - s * 0.08, s * 0.14, 0, Math.PI * 2);
        ctx.fill();
      } else if (item.kind === "star") {
        ctx.fillStyle = "#f5c542";
        ctx.beginPath();
        for (let i = 0; i < 10; i += 1) {
          const radius = i % 2 === 0 ? s / 2 : s / 4.4;
          const angle = (Math.PI / 5) * i - Math.PI / 2;
          ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillStyle = "#0f1011";
        ctx.strokeStyle = "#7b8187";
        ctx.lineWidth = 2;
        ctx.beginPath();
        const points = [
          [-0.5, -0.1],
          [-0.2, -0.48],
          [0.25, -0.42],
          [0.5, -0.05],
          [0.36, 0.38],
          [-0.1, 0.5],
          [-0.44, 0.3],
        ];
        points.forEach(([px, py], i) => (i ? ctx.lineTo(px * s, py * s) : ctx.moveTo(px * s, py * s)));
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#7b8187";
        ctx.fillRect(-s * 0.16, -s * 0.2, s * 0.16, s * 0.08);
      }
      ctx.restore();
    };

    const drawElf = (x: number, ground: number) => {
      const flash = g.hurt > 0 && Math.floor(g.hurt * 20) % 2 === 0;
      ctx.save();
      ctx.translate(x, ground);
      if (flash) ctx.globalAlpha = 0.45;
      // Boots and legs
      ctx.fillStyle = "#26282b";
      rounded(-15, -8, 14, 8, 4);
      rounded(1, -8, 14, 8, 4);
      ctx.fillStyle = "#005148";
      ctx.fillRect(-11, -20, 8, 14);
      ctx.fillRect(3, -20, 8, 14);
      // Arms reaching up to the basket
      ctx.strokeStyle = "#019587";
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-13, -40);
      ctx.lineTo(-30, -70);
      ctx.moveTo(13, -40);
      ctx.lineTo(30, -70);
      ctx.stroke();
      // Tunic and belt
      ctx.fillStyle = "#019587";
      rounded(-16, -48, 32, 30, 8);
      ctx.fillStyle = "#26282b";
      ctx.fillRect(-16, -32, 32, 5);
      ctx.fillStyle = "#f5c542";
      ctx.fillRect(-4, -33, 8, 7);
      // Head, ears and face
      ctx.fillStyle = "#f2c9a0";
      ctx.beginPath();
      ctx.moveTo(-11, -58);
      ctx.lineTo(-20, -64);
      ctx.lineTo(-10, -52);
      ctx.moveTo(11, -58);
      ctx.lineTo(20, -64);
      ctx.lineTo(10, -52);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(0, -57, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#26282b";
      ctx.beginPath();
      ctx.arc(-4, -58, 1.5, 0, Math.PI * 2);
      ctx.arc(4, -58, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#26282b";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, -55, 4.5, 0.2, Math.PI - 0.2);
      ctx.stroke();
      // Basket held overhead
      ctx.fillStyle = "#8a5a33";
      rounded(-40, -84, 80, 20, 8);
      ctx.fillStyle = "#6f4525";
      ctx.fillRect(-40, -84, 80, 5);
      // Hat (drawn last so it sits in front of the basket)
      ctx.fillStyle = "#ffffff";
      rounded(-12, -68, 24, 6, 3);
      ctx.fillStyle = "#a6bc09";
      ctx.beginPath();
      ctx.moveTo(-11, -67);
      ctx.lineTo(11, -67);
      ctx.lineTo(15, -92);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(15, -93, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      const { w, h } = g;
      const ground = h - 34;
      ctx.fillStyle = "#1d1f21";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      for (const flake of g.flakes) {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
        ctx.fill();
      }
      drawTree(w * 0.1, ground + 6, 1);
      drawTree(w * 0.9, ground + 6, 1.15);
      if (w > 520) drawTree(w * 0.74, ground + 6, 0.75);
      // Snowy ground: a grey drift behind a white one
      ctx.fillStyle = "#cfd8dc";
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, ground - 6);
      ctx.quadraticCurveTo(w * 0.25, ground - 22, w * 0.5, ground - 6);
      ctx.quadraticCurveTo(w * 0.75, ground + 8, w, ground - 12);
      ctx.lineTo(w, h);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(0, h);
      ctx.lineTo(0, ground + 4);
      ctx.quadraticCurveTo(w * 0.3, ground - 10, w * 0.55, ground + 4);
      ctx.quadraticCurveTo(w * 0.8, ground + 14, w, ground);
      ctx.lineTo(w, h);
      ctx.fill();

      g.items.forEach(drawItem);
      drawElf(g.elfX, ground + 2);

      ctx.font = "700 20px Montserrat, system-ui, sans-serif";
      ctx.textAlign = "center";
      for (const pop of g.pops) {
        ctx.globalAlpha = Math.min(1, pop.life * 2);
        ctx.fillStyle = pop.color;
        ctx.fillText(pop.text, pop.x, pop.y);
      }
      ctx.globalAlpha = 1;
    };

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (g.visible && !document.hidden) {
        update(dt);
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      resizer.disconnect();
      watcher.disconnect();
      canvas.removeEventListener("pointermove", pointer);
      canvas.removeEventListener("pointerdown", pointer);
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, []);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[1.05rem] font-semibold text-fg">
        <p>
          Presents caught: <span className="tabular-nums text-accent">{score}</span>
        </p>
        <p className="flex items-center gap-4">
          <span aria-label={`${lives} of ${LIVES} lives left`} className="tracking-[0.2em]">
            {Array.from({ length: LIVES }, (_, i) => (
              <span key={i} aria-hidden="true" className={i < lives ? "text-[#ff6b6b]" : "text-white/20"}>
                ♥
              </span>
            ))}
          </span>
          <span className="text-muted">
            Best: <span className="tabular-nums text-fg">{best}</span>
          </span>
        </p>
      </div>

      <div ref={wrapRef} className="relative mx-auto mt-4 max-w-[760px] overflow-hidden rounded-[24px] bg-[#1d1f21]">
        <canvas
          ref={canvasRef}
          tabIndex={0}
          aria-label="Present Catch game. Move the elf left and right to catch falling presents and avoid the coal."
          className="block w-full outline-none"
          style={{ touchAction: status === "playing" ? "none" : "pan-y" }}
        />
        {status !== "playing" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1d1f21]/80 p-6 text-center" aria-live="polite">
            {status === "over" ? (
              <>
                <p className="to-display text-3xl md:text-4xl">
                  You caught {score} {score === 1 ? "present" : "presents"}!
                </p>
                <p className="mt-3 max-w-[34ch] text-[1.05rem] leading-relaxed text-muted">
                  {score === 0 ? "The coal got you early. Give it another go." : `${score >= best ? "That’s a new best. " : ""}Nice work. You catch the presents, we’ll catch the snow.`}
                </p>
              </>
            ) : (
              <>
                <p className="to-display text-3xl md:text-4xl">Present Catch</p>
                <p className="mt-3 max-w-[36ch] text-[1.05rem] leading-relaxed text-muted">
                  Slide the elf to catch the presents. Gold stars are worth 5. Dodge the coal, and don’t let a present hit the snow.
                </p>
              </>
            )}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={start} className="to-btn to-btn-primary">
                {status === "over" ? "Play again" : "Play"}
              </button>
              {status === "over" && (
                <a href="#seasonal-form" className="to-btn to-btn-quiet">
                  Reserve a season pass
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <p className="mt-3 text-[0.95rem] text-muted">On a phone, drag your finger across the game. On a computer, use the mouse or the arrow keys.</p>
    </div>
  );
}
