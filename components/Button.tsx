type ButtonProps = {
    title: string;
    variant: string;
    type?: "submit" | "button";
}

function Button({ title, variant, type }: ButtonProps) {
  return (
    <button
        className={`${variant} w-full`}
        type={type}
    >
      {title}
    </button>
  )
}

export default Button