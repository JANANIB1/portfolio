import {
  useRef,
  useState,
  type ReactNode,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'
> & {
  children: ReactNode;
  variant?: 'solid' | 'outline' | 'ghost';
};

export default function MagneticButton({
  children,
  className,
  variant = 'solid',
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function onMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  }

  function onMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 14, mass: 0.4 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-xs uppercase tracking-wide transition-colors',
        variant === 'solid' && 'bg-accent text-canvas hover:bg-accent-bright',
        variant === 'outline' &&
          'border border-canvas-line text-ink-100 hover:border-accent/50 hover:text-accent',
        variant === 'ghost' && 'text-ink-300 hover:text-accent',
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
