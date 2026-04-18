import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Loader2, Code2, AlertCircle, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
  open_issues_count: number;
};

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-400",
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
  PHP: "bg-indigo-500",
  Python: "bg-green-500",
  Java: "bg-red-500",
  Shell: "bg-gray-400",
  Dart: "bg-cyan-400",
};

const languageBg: Record<string, string> = {
  JavaScript: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  TypeScript: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  HTML: "bg-orange-500/10 text-orange-400 border-orange-400/20",
  CSS: "bg-blue-500/10 text-blue-400 border-blue-400/20",
  PHP: "bg-indigo-500/10 text-indigo-400 border-indigo-400/20",
  Python: "bg-green-500/10 text-green-400 border-green-400/20",
};

function timeAgo(dateStr: string) {
  const now = new Date();
  const date = new Date(dateStr);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)}d ago`;
  return `${Math.floor(diff / 2592000)}mo ago`;
}

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRepos = () => {
    setLoading(true);
    setError(false);
    fetch("https://api.github.com/users/salonikashyap7899/repos?sort=updated&per_page=12")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => { fetchRepos(); }, []);

  return (
    <section id="github" className="py-28 relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-card/20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Live from GitHub</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My <span className="text-gradient">Repositories</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Real-time data pulled directly from my GitHub profile. Updated automatically whenever I push new code.
          </p>
        </motion.div>

        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 p-5 bg-card border border-border rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-foreground">@salonikashyap7899</p>
              <p className="text-sm text-muted-foreground">GitHub Profile · {repos.length} repos shown</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!loading && !error && (
              <motion.button
                onClick={fetchRepos}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/40 px-3 py-1.5 rounded-full"
              >
                <RefreshCw className="w-3 h-3" />
                Refresh
              </motion.button>
            )}
            <motion.a
              href="https://github.com/salonikashyap7899"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-sm shadow-primary/25 hover:opacity-90 transition-opacity"
            >
              View Profile <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* States */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-muted-foreground gap-4">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              <Loader2 className="w-8 h-8 text-primary" />
            </motion.div>
            <p className="text-sm">Fetching repositories from GitHub...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4 bg-destructive/5 border border-destructive/20 rounded-2xl">
            <AlertCircle className="w-10 h-10 text-destructive" />
            <p className="text-sm text-muted-foreground">Could not load repositories. Check your connection.</p>
            <button onClick={fetchRepos} className="text-sm font-semibold text-primary underline underline-offset-4">
              Try again
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <a href={repo.html_url} target="_blank" rel="noreferrer" className="block h-full">
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-md hover:shadow-primary/10 rounded-2xl overflow-hidden">
                    <CardHeader className="pb-3 relative">
                      {/* Language badge top right */}
                      {repo.language && (
                        <span className={`absolute top-4 right-4 text-xs font-medium px-2 py-0.5 rounded-full border ${languageBg[repo.language] || "bg-gray-400/10 text-gray-400 border-gray-400/20"}`}>
                          {repo.language}
                        </span>
                      )}
                      <div className="flex items-start gap-2 pr-20">
                        <Code2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <CardTitle className="text-sm font-bold font-mono text-primary group-hover:underline break-all leading-snug">
                          {repo.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-4 min-h-[32px] leading-relaxed">
                        {repo.description || "No description provided for this repository."}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          {repo.language && (
                            <div className="flex items-center gap-1">
                              <span className={`w-2 h-2 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`} />
                              <span className="font-medium">{repo.language}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-0.5">
                            <Star className="w-3 h-3" /> {repo.stargazers_count}
                          </div>
                          <div className="flex items-center gap-0.5">
                            <GitFork className="w-3 h-3" /> {repo.forks_count}
                          </div>
                        </div>
                        <span className="text-xs opacity-60">{timeAgo(repo.updated_at)}</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
