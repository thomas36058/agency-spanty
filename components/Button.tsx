type ButtonProps = {
    title: string;
    variant: string;
}

function Button({ title, variant }: ButtonProps) {
  return (
    <button
        className={`${variant} w-full`}
    >
      {title}
    </button>
  )
}

export default Button