import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserProfileCard } from "@/components/UserProfileCard";
import { SearchFilters } from "@/components/SearchFilters";
import { Pagination } from "@/components/Pagination";
import { useToast } from "@/hooks/use-toast";

// Mock data for demonstration
const mockProfiles = [
  {
    id: "1",
    name: "Marc Demo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    skillsHave: ["JavaScript", "React", "Node.js"],
    skillsWant: ["Python", "Machine Learning"],
    rating: 4.5,
  },
  {
    id: "2",
    name: "Michell",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    skillsHave: ["Design", "Figma", "Photoshop"],
    skillsWant: ["CSS", "Frontend"],
    rating: 4.2,
  },
  {
    id: "3",
    name: "Joe Willis",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    skillsHave: ["Python", "Data Science", "SQL"],
    skillsWant: ["React", "TypeScript"],
    rating: 4.8,
  },
  {
    id: "4",
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    skillsHave: ["Marketing", "Content Writing"],
    skillsWant: ["SEO", "Analytics"],
    rating: 4.1,
  },
  {
    id: "5",
    name: "Alex Rodriguez",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    skillsHave: ["Photography", "Video Editing"],
    skillsWant: ["Motion Graphics", "3D Modeling"],
    rating: 4.6,
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [availability, setAvailability] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();
  
  const itemsPerPage = 3;
  const totalPages = Math.ceil(mockProfiles.length / itemsPerPage);
  
  const filteredProfiles = mockProfiles.filter((profile) => {
    const matchesSearch = 
      profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.skillsHave.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      profile.skillsWant.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleRequest = (profileId: string) => {
    const profile = mockProfiles.find(p => p.id === profileId);
    toast({
      title: "Request Sent!",
      description: `Your skill swap request has been sent to ${profile?.name}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">
              Skill Swap Platform
            </h1>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          availability={availability}
          onAvailabilityChange={setAvailability}
        />

        {/* Profile Cards */}
        <div className="space-y-4">
          {paginatedProfiles.map((profile) => (
            <UserProfileCard
              key={profile.id}
              profile={profile}
              onRequest={handleRequest}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default Index;
