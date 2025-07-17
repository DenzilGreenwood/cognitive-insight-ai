import Link from "next/link";

interface CTAButton {
  href: string;
  text: string;
  variant: "primary" | "secondary";
}

interface CallToActionProps {
  title?: string;
  description?: string;
  buttons?: CTAButton[];
}

const defaultButtons: CTAButton[] = [
  {
    href: "/services",
    text: "Explore Services",
    variant: "primary"
  },
  {
    href: "/auth/signup",
    text: "Get Started Today", 
    variant: "secondary"
  }
];

export default function CallToAction({ 
  title = "Ready to Experience Clarity?",
  description = "Join leaders who have transformed complexity into competitive advantage.",
  buttons = defaultButtons
}: CallToActionProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-xl mb-8 text-blue-100">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {buttons.map((button, index) => (
          <Link 
            key={index}
            href={button.href} 
            className={
              button.variant === "primary" 
                ? "bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                : "border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            }
          >
            {button.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
