export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // Tailwind로 버튼 크기 클래스 지정
  const sizeClass = size === 'small'
    ? 'px-3 py-1.5 text-xs'
    : size === 'large'
    ? 'px-6 py-3 text-lg'
    : 'px-4 py-2 text-base';

  // primary 여부에 따라 색상 클래스 지정
  const modeClass = primary
    ? 'bg-blue-600 hover:bg-blue-700 text-white border-transparent'
    : 'bg-white hover:bg-gray-100 text-gray-800 border-gray-400';

  // 커스텀 배경색이 있으면 인라인 스타일로 적용
  return (
    <button
      type="button"
      className={`rounded font-semibold border ${sizeClass} ${modeClass} transition-colors duration-150`}
      style={backgroundColor ? { backgroundColor } : {}}
      {...props}
    >
      {label}
    </button>
  );
};
