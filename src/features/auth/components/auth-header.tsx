type AuthHeaderProps = {
  title: string
  linkText: string
  linkHref: string
}

export function AuthHeader({ title, linkText, linkHref }: AuthHeaderProps) {
  return (
    <div className="text-center">
      <h2 className="mt-6 text-3xl font-extrabold">{title}</h2>
      <p className="mt-2 text-sm">
        Ou{" "}
        <a href={linkHref} className="font-medium text-primary hover:text-primary/90">
          {linkText}
        </a>
      </p>
    </div>
  )
}
