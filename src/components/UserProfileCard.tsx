import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillBadge } from "./SkillBadge";
import { StarRating } from "./StarRating";

interface UserProfile {
  id: string;
  name: string;
  avatar?: string;
  skillsHave: string[];
  skillsWant: string[];
  rating: number;
}

interface UserProfileCardProps {
  profile: UserProfile;
  onRequest: (profileId: string) => void;
}

export function UserProfileCard({ profile, onRequest }: UserProfileCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="transition-all duration-200 hover:shadow-lg border border-border bg-card">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {/* Profile Photo */}
          <Avatar className="h-16 w-16 flex-shrink-0">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback className="text-lg font-semibold bg-accent">
              {getInitials(profile.name)}
            </AvatarFallback>
          </Avatar>

          {/* Profile Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-foreground mb-2">
              {profile.name}
            </h3>

            {/* Skills Have */}
            {profile.skillsHave.length > 0 && (
              <div className="mb-3">
                <p className="text-sm text-muted-foreground mb-1">Can teach:</p>
                <div className="flex flex-wrap gap-1">
                  {profile.skillsHave.map((skill) => (
                    <SkillBadge key={skill} skill={skill} type="have" />
                  ))}
                </div>
              </div>
            )}

            {/* Skills Want */}
            {profile.skillsWant.length > 0 && (
              <div className="mb-3">
                <p className="text-sm text-muted-foreground mb-1">Wants to learn:</p>
                <div className="flex flex-wrap gap-1">
                  {profile.skillsWant.map((skill) => (
                    <SkillBadge key={skill} skill={skill} type="want" />
                  ))}
                </div>
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center justify-between">
              <StarRating rating={profile.rating} />
              <Button
                onClick={() => onRequest(profile.id)}
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-6"
              >
                Request
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}