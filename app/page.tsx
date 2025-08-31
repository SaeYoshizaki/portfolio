"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Code,
  Server,
  Award,
  User,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Trophy,
  Target,
  Briefcase,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                  山田 太郎
                  <span className="block text-primary font-mono text-2xl sm:text-3xl lg:text-4xl mt-4">
                    {"// Security Engineer"}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  東京大学 情報理工学系研究科 修士1年
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="font-medium"
                  onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  プロフィールを見る
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        自己紹介
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        セキュリティエンジニアを目指している大学院生です。サイバーセキュリティの分野で、特に脆弱性診断やインシデント対応に興味を持っています。
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        学部時代からプログラミングに取り組み、現在は情報セキュリティの研究に従事しています。実践的なスキルを身につけるため、CTFやセキュリティキャンプにも積極的に参加しています。
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>学歴・専攻</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">東京大学 情報理工学系研究科</p>
                          <p className="text-sm text-muted-foreground">修士課程 1年 (2024年4月〜)</p>
                          <p className="text-sm text-muted-foreground">専攻: 情報セキュリティ</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">東京大学 工学部</p>
                          <p className="text-sm text-muted-foreground">学士課程 (2020年4月〜2024年3月)</p>
                          <p className="text-sm text-muted-foreground">専攻: 電子情報工学科</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                        <User className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground text-center">プロフィール写真</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">経歴</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Badge variant="secondary">脆弱性診断</Badge>
                      <Badge variant="secondary">インシデント対応</Badge>
                      <Badge variant="secondary">ペネトレーションテスト</Badge>
                      <Badge variant="secondary">マルウェア解析</Badge>
                      <Badge variant="secondary">セキュアコーディング</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      職歴
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="font-semibold text-lg">株式会社A</h3>
                          <Badge variant="outline" className="w-fit">
                            2024年11月 - 2025年9月
                          </Badge>
                        </div>
                        <p className="text-primary font-medium mt-1">セキュリティエンジニア（インターン）</p>
                        <div className="mt-3 space-y-2 text-muted-foreground">
                          <p>• Webアプリケーションの脆弱性診断業務に従事</p>
                          <p>• ペネトレーションテストの実施とレポート作成</p>
                          <p>• セキュリティインシデント対応チームでの業務経験</p>
                          <p>• 社内セキュリティツールの開発・改善に参加</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="secondary" className="font-mono text-xs">
                            Python
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs">
                            Burp Suite
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs">
                            Nmap
                          </Badge>
                          <Badge variant="secondary" className="font-mono text-xs">
                            OWASP ZAP
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      セキュリティツール
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Nmap</span>
                        <Badge variant="outline">Advanced</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Burp Suite</span>
                        <Badge variant="outline">Intermediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Wireshark</span>
                        <Badge variant="outline">Intermediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Metasploit</span>
                        <Badge variant="outline">Beginner</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">OWASP ZAP</span>
                        <Badge variant="outline">Intermediate</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      プログラミング
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Python</span>
                        <Badge variant="outline">Advanced</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Go</span>
                        <Badge variant="outline">Intermediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">JavaScript</span>
                        <Badge variant="outline">Intermediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">C/C++</span>
                        <Badge variant="outline">Intermediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Bash</span>
                        <Badge variant="outline">Advanced</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" />
                      インフラ・クラウド
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">AWS</span>
                        <Badge variant="outline">Intermediate</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Docker</span>
                        <Badge variant="outline">Advanced</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Kubernetes</span>
                        <Badge variant="outline">Beginner</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Linux</span>
                        <Badge variant="outline">Advanced</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-sm">Terraform</span>
                        <Badge variant="outline">Beginner</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Works</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      脆弱性スキャナー
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      Webアプリケーションの脆弱性を自動検出するPythonツールを開発。OWASP Top
                      10の脆弱性に対応し、レポート機能も実装。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="font-mono text-xs">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        Flask
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        SQLite
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">2024年3月 - 個人プロジェクト</div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      ログ解析システム
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      大量のセキュリティログを解析し、異常なアクセスパターンを検出するシステム。機械学習を活用した異常検知機能を実装。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="font-mono text-xs">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        scikit-learn
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        Elasticsearch
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">2023年12月 - 研究プロジェクト</div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      セキュアチャットアプリ
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      エンドツーエンド暗号化を実装したリアルタイムチャットアプリケーション。Signal
                      Protocolを参考にした暗号化方式を採用。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="font-mono text-xs">
                        Go
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        WebSocket
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        React
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">2023年8月 - チーム開発</div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      ハニーポットシステム
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      攻撃者の行動を観察・記録するためのハニーポットシステム。複数のサービスを模擬し、攻撃パターンを分析。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="font-mono text-xs">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        Docker
                      </Badge>
                      <Badge variant="secondary" className="font-mono text-xs">
                        Grafana
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">2023年6月 - 個人プロジェクト</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Activities</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      セキュリティキャンプ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">セキュリティ・キャンプ全国大会2023</p>
                          <p className="text-sm text-muted-foreground">Webセキュリティクラス参加</p>
                          <p className="text-sm text-muted-foreground">2023年8月</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium">セキュリティ・ミニキャンプ in 東京</p>
                          <p className="text-sm text-muted-foreground">マルウェア解析入門講座</p>
                          <p className="text-sm text-muted-foreground">2023年3月</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        セキュリティキャンプでは、実践的なWebセキュリティの知識を学び、
                        同世代のセキュリティエンジニア志望者とのネットワークを構築しました。
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      CTF参加歴
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">SECCON CTF 2023</p>
                          <p className="text-sm text-muted-foreground">チーム参加</p>
                        </div>
                        <Badge variant="outline">15位</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">picoCTF 2023</p>
                          <p className="text-sm text-muted-foreground">個人参加</p>
                        </div>
                        <Badge variant="outline">上位10%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">CPCTF 2023</p>
                          <p className="text-sm text-muted-foreground">チーム参加</p>
                        </div>
                        <Badge variant="outline">8位</Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        主にWeb、Crypto、Forensicsカテゴリを得意としています。
                        チーム「TokyoTech_Sec」のメンバーとして活動中。
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      競技プログラミング
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">AtCoder</h4>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-primary font-mono">1247</p>
                            <p className="text-sm text-muted-foreground">Rating</p>
                          </div>
                          <div className="text-center">
                            <p className="text-2xl font-bold text-orange-500 font-mono">橙</p>
                            <p className="text-sm text-muted-foreground">Color</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          AtCoderプロフィール
                        </Button>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium">その他の活動</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>• ICPC Asia-Tokyo Regional 2023 参加</p>
                          <p>• 大学プログラミングコンテスト 3位入賞</p>
                          <p>• アルゴリズム勉強会 主催</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>お問い合わせフォーム</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">お名前</label>
                      <Input placeholder="山田 太郎" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">メールアドレス</label>
                      <Input type="email" placeholder="example@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">件名</label>
                      <Input placeholder="お問い合わせの件名" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">メッセージ</label>
                      <Textarea placeholder="お問い合わせ内容をご記入ください" className="min-h-[120px]" />
                    </div>
                    <Button className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      送信する
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>連絡先情報</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground font-mono">yamada@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">東京都, 日本</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>SNS・プロフィール</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Award className="h-4 w-4 mr-2" />
                        AtCoder
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
