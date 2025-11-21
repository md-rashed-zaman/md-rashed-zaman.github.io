const iconMap: Record<string, string> = {
  "C++": "cplusplus/cplusplus-original",
  "Java": "java/java-original",
  "JavaScript": "javascript/javascript-original",
  "Go": "go/go-original-wordmark",
  "TypeScript": "typescript/typescript-original",
  "SQL": "azuresqldatabase/azuresqldatabase-original",
  "C#": "csharp/csharp-original",
  "Spring Boot": "spring/spring-original",
  "Node.js": "nodejs/nodejs-original",
  "Express.js": "express/express-original",
  "Nest.js": "nestjs/nestjs-original",
  "ASP.NET Core": "dotnetcore/dotnetcore-original",
  "React": "react/react-original",
  "Next.js": "nextjs/nextjs-original",
  "MongoDB": "mongodb/mongodb-original",
  "PostgreSQL": "postgresql/postgresql-original",
  "MySQL": "mysql/mysql-original",
  "Git": "git/git-original",
  "Postman": "postman/postman-original",
  "Docker": "docker/docker-original",
  "Linux": "linux/linux-original",
  "GraphQL": "graphql/graphql-plain",
  "Prisma": "prisma/prisma-original",
  "LaTeX": "latex/latex-original"
};

export const darkInvertList = ["Express.js", "Next.js", "GitHub", "LaTeX", "Prisma"];

export const getIconUrl = (tech: string) => {
  const path = iconMap[tech];
  if (!path) return "";
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;
};