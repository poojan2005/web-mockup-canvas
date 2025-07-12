import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  availability: string;
  onAvailabilityChange: (value: string) => void;
}

export function SearchFilters({
  searchTerm,
  onSearchChange,
  availability,
  onAvailabilityChange,
}: SearchFiltersProps) {
  return (
    <div className="flex gap-4 mb-6">
      <Select value={availability} onValueChange={onAvailabilityChange}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Availability" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Availability</SelectItem>
          <SelectItem value="available">Available Now</SelectItem>
          <SelectItem value="weekends">Weekends Only</SelectItem>
          <SelectItem value="evenings">Evenings</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search skills, names..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
    </div>
  );
}