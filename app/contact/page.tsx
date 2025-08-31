"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Mail, ExternalLink, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理（プレースホルダー）
    console.log("Form submitted:", formData)
    alert("お問い合わせありがとうございます。後ほどご連絡いたします。")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">Contact</h1>
              <p className="text-xl text-muted-foreground">お気軽にお問い合わせください</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Links */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>連絡先・SNS</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                        <Link href="https://github.com/example-user" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub: @example-user
                          <ExternalLink className="h-3 w-3 ml-auto" />
                        </Link>
                      </Button>

                      <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                        <Link href="https://atcoder.jp/users/example_user" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          AtCoder: example_user
                          <ExternalLink className="h-3 w-3 ml-auto" />
                        </Link>
                      </Button>

                      <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                        <Link href="mailto:example@university.ac.jp">
                          <Mail className="h-4 w-4 mr-2" />
                          example@university.ac.jp
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>お問い合わせについて</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <p>以下のようなお問い合わせをお待ちしております：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• インターンシップ・就職に関するご相談</li>
                      <li>• 技術的な質問・ディスカッション</li>
                      <li>• プロジェクトへの参加・協力</li>
                      <li>• 勉強会・イベントでの発表依頼</li>
                      <li>• その他セキュリティ関連のご相談</li>
                    </ul>
                    <p className="mt-3">通常24時間以内にご返信いたします。</p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="h-5 w-5 mr-2 text-primary" />
                    お問い合わせフォーム
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="山田 太郎"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@company.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">件名 *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="お問い合わせの件名"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">メッセージ *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="お問い合わせ内容をご記入ください..."
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      送信する
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle>その他の情報</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-2">技術スタック</h4>
                    <p className="text-muted-foreground">
                      Python, Go, JavaScript/TypeScript, React, Next.js, AWS, Docker, Linux, セキュリティツール各種
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">興味のある分野</h4>
                    <p className="text-muted-foreground">
                      Webアプリケーションセキュリティ, DevSecOps, クラウドセキュリティ, マルウェア解析
                    </p>
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
