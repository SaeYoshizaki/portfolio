import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Server, Database, Globe, Terminal } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "セキュリティツール",
      icon: Shield,
      skills: [
        { name: "Burp Suite", level: "Advanced" },
        { name: "Nmap", level: "Advanced" },
        { name: "Metasploit", level: "Intermediate" },
        { name: "Wireshark", level: "Advanced" },
        { name: "OWASP ZAP", level: "Intermediate" },
        { name: "Nessus", level: "Intermediate" },
        { name: "Ghidra", level: "Beginner" },
        { name: "Volatility", level: "Intermediate" },
      ],
    },
    {
      title: "プログラミング言語",
      icon: Code,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "Go", level: "Intermediate" },
        { name: "JavaScript/TypeScript", level: "Intermediate" },
        { name: "C/C++", level: "Intermediate" },
        { name: "Java", level: "Beginner" },
        { name: "Rust", level: "Beginner" },
        { name: "Shell Script", level: "Advanced" },
        { name: "PowerShell", level: "Intermediate" },
      ],
    },
    {
      title: "インフラ・クラウド",
      icon: Server,
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Docker", level: "Advanced" },
        { name: "Kubernetes", level: "Intermediate" },
        { name: "Terraform", level: "Intermediate" },
        { name: "Ansible", level: "Beginner" },
        { name: "Linux", level: "Advanced" },
        { name: "Windows Server", level: "Intermediate" },
        { name: "VMware", level: "Intermediate" },
      ],
    },
    {
      title: "データベース",
      icon: Database,
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "MongoDB", level: "Beginner" },
        { name: "Redis", level: "Beginner" },
        { name: "Elasticsearch", level: "Beginner" },
      ],
    },
    {
      title: "Webフレームワーク",
      icon: Globe,
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Django", level: "Advanced" },
        { name: "Flask", level: "Advanced" },
        { name: "FastAPI", level: "Intermediate" },
        { name: "Express.js", level: "Beginner" },
      ],
    },
    {
      title: "その他ツール",
      icon: Terminal,
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub Actions", level: "Intermediate" },
        { name: "Jenkins", level: "Beginner" },
        { name: "Splunk", level: "Intermediate" },
        { name: "ELK Stack", level: "Beginner" },
        { name: "Grafana", level: "Beginner" },
        { name: "Prometheus", level: "Beginner" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground"
      case "Intermediate":
        return "bg-secondary text-secondary-foreground"
      case "Beginner":
        return "bg-muted text-muted-foreground"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Skills</h1>
              <p className="text-xl text-muted-foreground">技術スキルと習熟度</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <Card key={index} className="h-fit">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <IconComponent className="h-5 w-5 mr-2 text-primary" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center space-x-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <Badge variant="secondary" className={`text-xs ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>習熟度について</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-primary text-primary-foreground">Advanced</Badge>
                    <span className="text-muted-foreground">実務レベル・指導可能</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-secondary text-secondary-foreground">Intermediate</Badge>
                    <span className="text-muted-foreground">一人で開発可能</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-muted text-muted-foreground">Beginner</Badge>
                    <span className="text-muted-foreground">基本的な操作が可能</span>
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
