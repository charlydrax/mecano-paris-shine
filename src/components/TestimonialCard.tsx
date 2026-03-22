import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  car: string;
}

const TestimonialCard = ({ name, text, rating, car }: TestimonialCardProps) => (
  <div className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border/50">
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-secondary fill-secondary" : "text-muted"}`}
        />
      ))}
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{text}"</p>
    <div>
      <p className="font-heading font-semibold text-sm text-foreground">{name}</p>
      <p className="text-xs text-muted-foreground">{car}</p>
    </div>
  </div>
);

export default TestimonialCard;
