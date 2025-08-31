import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, GraduationCap, Heart, MapPin } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-xl text-muted-foreground">セキュリティエンジニアを目指す学生です</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Image Placeholder */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                      <User className="h-24 w-24 text-muted-foreground" />
                    </div>
                    <div className="text-center space-y-2">
                      <h3 className="font-semibold text-lg">山田 太郎</h3>
                      <p className="text-sm text-muted-foreground font-mono">Security Engineer Student</p>
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        東京, 日本
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Details */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                      学歴・専攻
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold">東京大学 大学院 情報理工学系研究科</h4>
                      <p className="text-sm text-muted-foreground">修士課程 1年 (2024年4月 - 現在)</p>
                      <p className="text-sm mt-2">
                        専攻: コンピュータサイエンス
                        <br />
                        研究室: セキュリティ・プライバシー研究室
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">東京大学 工学部 電子情報工学科</h4>
                      <p className="text-sm text-muted-foreground">学士課程 (2020年4月 - 2024年3月)</p>
                      <p className="text-sm mt-2">卒業論文: 「機械学習を用いたマルウェア検知システムの研究」</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="h-5 w-5 mr-2 text-primary" />
                      興味分野
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">セキュリティ分野</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Webアプリケーションセキュリティ</li>
                          <li>• マルウェア解析</li>
                          <li>• インシデントレスポンス</li>
                          <li>• ペネトレーションテスト</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">技術分野</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• クラウドセキュリティ (AWS)</li>
                          <li>• DevSecOps</li>
                          <li>• 機械学習とセキュリティ</li>
                          <li>• ブロックチェーンセキュリティ</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>自己紹介</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      <p>
                        セキュリティエンジニアを目指している大学院生です。学部時代からサイバーセキュリティに興味を持ち、
                        セキュリティキャンプやCTF競技に積極的に参加してきました。
                      </p>
                      <p>
                        現在は大学院でセキュリティ関連の研究に取り組みながら、実践的なスキルを身につけるため
                        様々なプロジェクトに参加しています。将来は企業のセキュリティ向上に貢献できる
                        エンジニアになることを目標としています。
                      </p>
                      <p>
                        技術的な学習だけでなく、セキュリティコミュニティでの活動や知識共有にも力を入れており、
                        勉強会での発表や技術ブログの執筆なども行っています。
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
