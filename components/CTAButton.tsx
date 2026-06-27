type CTAButtonProps = {
  text: string;
  href: string;
};

export default function CTAButton({
  text,
  href,
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
    >
      {text}
    </a>
  );
}