import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Shield, Globe, Database, Code } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WorksPage() {
  const projects = [
    {
      title: "Webアプリケーション脆弱性スキャナー",
      description:
        "Pythonで開発したWebアプリケーションの脆弱性を自動検出するツール。OWASP Top 10の脆弱性を中心に、SQLインジェクション、XSS、CSRFなどを検出可能。",
      technologies: ["Python", "Flask", "SQLAlchemy", "BeautifulSoup", "Requests"],
      category: "Security Tool",
      icon: Shield,
      github: "https://github.com/example/vuln-scanner",
      demo: null,
      status: "開発中",
    },
    {
      title: "CTF問題管理プラットフォーム",
      description:
        "CTF競技の問題を管理・配布するためのWebプラットフォーム。Docker環境での問題実行、自動採点機能、チーム管理機能を実装。",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
      category: "Web Application",
      icon: Globe,
      github: "https://github.com/example/ctf-platform",
      demo: "https://ctf-platform-demo.vercel.app",
      status: "完成",
    },
    {
      title: "ログ解析・異常検知システム",
      description:
        "機械学習を用いてシステムログから異常なアクセスパターンを検知するシステム。リアルタイム処理とアラート機能を実装。",
      technologies: ["Python", "scikit-learn", "Pandas", "Elasticsearch", "Kibana"],
      category: "Machine Learning",
      icon: Database,
      github: "https://github.com/example/log-analyzer",
      demo: null,
      status: "完成",
    },
    {
      title: "マルウェア静的解析ツール",
      description:
        "PEファイルの静的解析を行い、マルウェアの特徴を抽出・分類するツール。機械学習モデルを用いた検知機能も実装。",
      technologies: ["Python", "pefile", "scikit-learn", "Matplotlib", "Tkinter"],
      category: "Security Tool",
      icon: Shield,
      github: "https://github.com/example/malware-analyzer",
      demo: null,
      status: "完成",
    },
    {
      title: "セキュリティ学習プラットフォーム",
      description:
        "セキュリティの基礎知識を学習できるWebアプリケーション。インタラクティブな演習問題と進捗管理機能を提供。",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      category: "Web Application",
      icon: Globe,
      github: "https://github.com/example/security-learning",
      demo: "https://security-learning-demo.vercel.app",
      status: "開発中",
    },
    {
      title: "ネットワーク監視ダッシュボード",
      description:
        "ネットワークトラフィックをリアルタイムで監視・可視化するダッシュボード。異常検知とアラート機能を実装。",
      technologies: ["Go", "React", "InfluxDB", "Grafana", "Docker"],
      category: "Monitoring Tool",
      icon: Code,
      github: "https://github.com/example/network-monitor",
      demo: null,
      status: "完成",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "完成":
        return "bg-primary text-primary-foreground"
      case "開発中":
        return "bg-secondary text-secondary-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Security Tool":
        return "text-red-600 bg-red-50 border-red-200"
      case "Web Application":
        return "text-blue-600 bg-blue-50 border-blue-200"
      case "Machine Learning":
        return "text-green-600 bg-green-50 border-green-200"
      case "Monitoring Tool":
        return "text-purple-600 bg-purple-50 border-purple-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Works</h1>
              <p className="text-xl text-muted-foreground">これまでの開発成果物</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const IconComponent = project.icon
                return (
                  <Card key={index} className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="h-5 w-5 text-primary" />
                          <CardTitle className="text-lg">{project.title}</CardTitle>
                        </div>
                        <div className="flex space-x-2">
                          <Badge className={getCategoryColor(project.category)} variant="outline">
                            {project.category}
                          </Badge>
                          <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col space-y-4">
                      <p className="text-sm text-muted-foreground flex-1">{project.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2">使用技術</h4>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          {project.github && (
                            <Button asChild variant="outline" size="sm">
                              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                GitHub
                              </Link>
                            </Button>
                          )}
                          {project.demo && (
                            <Button asChild variant="outline" size="sm">
                              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Demo
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>その他の成果物</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">技術ブログ記事</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 「Webアプリケーションセキュリティの基礎」</li>
                      <li>• 「CTF WriteUp: Pwn問題解法」</li>
                      <li>• 「機械学習を用いたマルウェア検知」</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">発表・登壇</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• セキュリティキャンプ2023 成果発表</li>
                      <li>• 大学セキュリティ勉強会 講師</li>
                      <li>• CTF勉強会 問題作成・解説</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
