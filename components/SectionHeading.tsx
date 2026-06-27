type SectionHeadingProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
};

export default function SectionHeading({
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        {title}{" "}
        {highlight && (
          <span className="text-yellow-500">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}