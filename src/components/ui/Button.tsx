
export default function Button
({   children,
     disabled = false,
     variant = 'solid',
     size='medium',
     icon,
     iconPosition = 'left',
     className = '',
     ...props

}: ButtonProps) {

    const baseClasses = 'font-semibold rounded-xl text-base leading-6 cursor-pointer transition-colors duration-200 ease-in-out rounded-md focus:outline-none'

    const sizeClasses = {
        small: 'px-3 py-1.5 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    }
    const variantClasses = {
        ghost: 'bg-transparent text-[#283841]',
        link: 'bg-transparent text-blue-600',
        solid: 'bg-[#223A60] text-white hover:bg-[#223A60]',
        outline: 'bg-transparent border border-[#223A60] text-[#223A60] hover:bg-[#223A60] hover:text-white focus:ring-[#223A60]',
    }

    const disabledClasses = 'opacity-50 cursor-not-allowed'


    return (
        <button className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
        disabled={disabled}
        {...props}
        >
            {icon && iconPosition === 'left' && (
                <span className="mr-2">{icon}</span>
            )}
            {children}
            {icon && iconPosition === 'right' && (
                <span className="ml-2">{icon}</span>
            )}
        </button>
    );
}