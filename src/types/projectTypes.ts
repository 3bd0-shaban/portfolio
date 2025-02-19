interface ProjectStats {
  stars: string;
  forks: string;
  views: string;
}

interface projectTypes {
  title: string;
  description: string;
  image: string;
  folderImages: string;
  tags: string[];
  github: string;
  demo: string;
  gradient: string;
  status: string;
  stats?: ProjectStats;
}
