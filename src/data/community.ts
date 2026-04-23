export interface Discipline {
  name: string;
  level: number;
}

export interface CommunityMember {
  name: string;
  image: string;
  disciplines: Discipline[];
}

export const communityMembers: CommunityMember[] = [
  {
    name: "PreyAlone",
    image: "avatar_silver.png",
    disciplines: [
      { name: "Basic skills", level: 5 },
      { name: "Flat Freestyle", level: 4 },
      { name: "Jibbing", level: 3 },
      { name: "Big Air", level: 4 },
      { name: "Carving", level: 5 },
      { name: "Freeride", level: 4 }
    ]
  },
  {
    name: "Ilseed",
    image: "kalmar.png",
    disciplines: [
      { name: "Basic skills", level: 4 },
      { name: "Flat Freestyle", level: 5 },
      { name: "Jibbing", level: 5 },
      { name: "Big Air", level: 3 },
      { name: "Carving", level: 4 },
      { name: "Freeride", level: 5 }
    ]
  }
];

