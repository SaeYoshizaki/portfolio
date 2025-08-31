import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Trophy, Target, Calendar } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ActivitiesPage() {
  const securityCampActivities = [
    {
      year: "2023",
      title: "セキュリティキャンプ全国大会2023",
      track: "Web・ネットワークセキュリティトラック",
      description:
        "Webアプリケーションセキュリティとネットワークセキュリティについて集中的に学習。実際の脆弱性を持つアプリケーションを用いた演習や、ペネトレーションテストの実践を行いました。",
      achievements: [
        "SQLインジェクション攻撃の実装と対策",
        "XSS攻撃の検証と防御手法の学習",
        "ネットワーク侵入検知システムの構築",
        "チーム開発でのセキュアコーディング実践",
      ],
    },
    {
      year: "2022",
      title: "セキュリティキャンプ地方大会",
      track: "関東地方大会",
      description: "基礎的なセキュリティ知識から実践的な演習まで幅広く学習。初心者向けのCTF問題作成にも挑戦しました。",
      achievements: [
        "リバースエンジニアリングの基礎",
        "フォレンジック解析の手法",
        "CTF問題作成（Web・Crypto分野）",
        "セキュリティツールの使用方法",
      ],
    },
  ]

  const ctfResults = [
    {
      event: "SECCON CTF 2023",
      rank: "15位",
      team: "TokyoTech_Security",
      category: "国内大会",
      points: "2,450",
      solvedCategories: ["Web", "Pwn", "Crypto", "Misc"],
    },
    {
      event: "picoCTF 2023",
      rank: "42位",
      team: "Individual",
      category: "国際大会",
      points: "8,900",
      solvedCategories: ["Web", "Binary", "Crypto", "Forensics"],
    },
    {
      event: "HITCON CTF 2023",
      rank: "128位",
      team: "TokyoTech_Security",
      category: "国際大会",
      points: "1,200",
      solvedCategories: ["Web", "Misc"],
    },
    {
      event: "TSG CTF 2023",
      rank: "8位",
      team: "TokyoTech_Security",
      category: "大学大会",
      points: "3,200",
      solvedCategories: ["Web", "Pwn", "Rev", "Crypto"],
    },
  ]

  const atcoderInfo = {
    rating: "1,247",
    rank: "茶色",
    maxRating: "1,389",
    contestsParticipated: 45,
    problemsSolved: 312,
  }

  const getRankColor = (rank: string) => {
    if (rank.includes("位") && Number.parseInt(rank) <= 10) {
      return "bg-yellow-100 text-yellow-800 border-yellow-300"
    } else if (rank.includes("位") && Number.parseInt(rank) <= 50) {
      return "bg-blue-100 text-blue-800 border-blue-300"
    } else {
      return "bg-gray-100 text-gray-800 border-gray-300"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Activities</h1>
              <p className="text-xl text-muted-foreground">セキュリティ関連の活動・競技参加歴</p>
            </div>

            {/* Security Camp Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Award className="h-6 w-6 mr-2 text-primary" />
                セキュリティキャンプ
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {securityCampActivities.map((activity, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{activity.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{activity.track}</p>
                        </div>
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          {activity.year}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{activity.description}</p>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">学習内容・成果</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {activity.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* CTF Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-primary" />
                CTF参加歴
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {ctfResults.map((result, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{result.event}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">チーム: {result.team}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <Badge className={getRankColor(result.rank)} variant="outline">
                            {result.rank}
                          </Badge>
                          <p className="text-xs text-muted-foreground">{result.category}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">獲得ポイント</span>
                        <span className="font-mono text-sm font-semibold">{result.points}</span>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">解答カテゴリ</h4>
                        <div className="flex flex-wrap gap-1">
                          {result.solvedCategories.map((category, categoryIndex) => (
                            <Badge key={categoryIndex} variant="secondary" className="text-xs">
                              {category}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* AtCoder Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                競技プログラミング (AtCoder)
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>AtCoder成績</span>
                      <Button asChild variant="outline" size="sm">
                        <Link href="https://atcoder.jp/users/example_user" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          プロフィール
                        </Link>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold font-mono text-primary">{atcoderInfo.rating}</div>
                        <div className="text-sm text-muted-foreground">現在のレーティング</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-amber-600">{atcoderInfo.rank}</div>
                        <div className="text-sm text-muted-foreground">ランク</div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>最高レーティング</span>
                        <span className="font-mono font-semibold">{atcoderInfo.maxRating}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>参加コンテスト数</span>
                        <span className="font-mono font-semibold">{atcoderInfo.contestsParticipated}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>解答問題数</span>
                        <span className="font-mono font-semibold">{atcoderInfo.problemsSolved}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      最近の活動
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>AtCoder Beginner Contest 334</span>
                        <div className="text-right">
                          <div className="font-semibold">4問正解</div>
                          <div className="text-xs text-muted-foreground">2024/01/20</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>AtCoder Regular Contest 169</span>
                        <div className="text-right">
                          <div className="font-semibold">2問正解</div>
                          <div className="text-xs text-muted-foreground">2024/01/13</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>AtCoder Beginner Contest 333</span>
                        <div className="text-right">
                          <div className="font-semibold">5問正解</div>
                          <div className="text-xs text-muted-foreground">2024/01/06</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Other Activities */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>その他の活動</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-3">コミュニティ活動</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 大学セキュリティ研究会 副代表 (2023-現在)</li>
                      <li>• CTF勉強会 主催・講師 (月1回開催)</li>
                      <li>• セキュリティ勉強会での発表 (年4回)</li>
                      <li>• 新入生向けセキュリティ講座 講師</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">資格・認定</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 情報処理安全確保支援士 (取得予定: 2024年春)</li>
                      <li>• 応用情報技術者 (2023年秋 合格)</li>
                      <li>• 基本情報技術者 (2022年春 合格)</li>
                      <li>• TOEIC 850点 (2023年12月)</li>
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
