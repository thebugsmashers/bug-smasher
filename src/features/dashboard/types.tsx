interface BugCardProps {
  title: string;
  description: string;
  priority: number;
  smashByDate: string;
  isSmashed: boolean;
  createdAt: string;
}

interface BugObj {
  bugId: number;
  title: string;
  priority: string;
  descrtiption: string;
  isSmashed: boolean;
  smashBy: string;
  createdAt: string;
}

export type { BugCardProps, BugObj };
