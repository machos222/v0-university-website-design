import { Client } from "@notionhq/client"
import type {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints"

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

// Database IDs from environment variables
const NEWS_DATABASE_ID = process.env.NOTION_NEWS_DATABASE_ID || ""
const LAB_LIFE_DATABASE_ID = process.env.NOTION_LAB_LIFE_DATABASE_ID || ""

// Types for our content
export interface NewsItem {
  id: string
  title: string
  date: string
  category: string
  summary: string
  slug: string
}

export interface LabLifePost {
  id: string
  title: string
  date: string
  category: string
  description: string
  images: string[]
  slug: string
}

// Helper to extract text from rich text
function getRichText(richText: { plain_text: string }[]): string {
  return richText.map((t) => t.plain_text).join("")
}

// Helper to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Fetch news from Notion
export async function getNews(): Promise<NewsItem[]> {
  if (!NEWS_DATABASE_ID) {
    console.warn("NOTION_NEWS_DATABASE_ID is not set")
    return []
  }

  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: NEWS_DATABASE_ID,
      sorts: [
        {
          property: "日付",
          direction: "descending",
        },
      ],
      filter: {
        property: "公開",
        checkbox: {
          equals: true,
        },
      },
    })

    return response.results
      .filter((page): page is PageObjectResponse => "properties" in page)
      .map((page) => {
        const properties = page.properties

        // Extract title
        const titleProp = properties["タイトル"]
        const title =
          titleProp?.type === "title" ? getRichText(titleProp.title) : ""

        // Extract date
        const dateProp = properties["日付"]
        const dateValue =
          dateProp?.type === "date" ? dateProp.date?.start || "" : ""

        // Extract category
        const categoryProp = properties["カテゴリ"]
        const category =
          categoryProp?.type === "select"
            ? categoryProp.select?.name || "お知らせ"
            : "お知らせ"

        // Extract summary
        const summaryProp = properties["概要"]
        const summary =
          summaryProp?.type === "rich_text"
            ? getRichText(summaryProp.rich_text)
            : ""

        // Extract slug
        const slugProp = properties["スラッグ"]
        const slug =
          slugProp?.type === "rich_text"
            ? getRichText(slugProp.rich_text) || page.id
            : page.id

        return {
          id: page.id,
          title,
          date: dateValue ? formatDate(dateValue) : "",
          category,
          summary,
          slug,
        }
      })
  } catch (error) {
    console.error("Error fetching news from Notion:", error)
    return []
  }
}

// Fetch lab life posts from Notion
export async function getLabLifePosts(): Promise<LabLifePost[]> {
  if (!LAB_LIFE_DATABASE_ID) {
    console.warn("NOTION_LAB_LIFE_DATABASE_ID is not set")
    return []
  }

  try {
    const response: QueryDatabaseResponse = await notion.databases.query({
      database_id: LAB_LIFE_DATABASE_ID,
      sorts: [
        {
          property: "日付",
          direction: "descending",
        },
      ],
      filter: {
        property: "公開",
        checkbox: {
          equals: true,
        },
      },
    })

    return response.results
      .filter((page): page is PageObjectResponse => "properties" in page)
      .map((page) => {
        const properties = page.properties

        // Extract title
        const titleProp = properties["タイトル"]
        const title =
          titleProp?.type === "title" ? getRichText(titleProp.title) : ""

        // Extract date
        const dateProp = properties["日付"]
        const dateValue =
          dateProp?.type === "date" ? dateProp.date?.start || "" : ""

        // Extract category
        const categoryProp = properties["カテゴリ"]
        const category =
          categoryProp?.type === "select"
            ? categoryProp.select?.name || "イベント"
            : "イベント"

        // Extract description
        const descProp = properties["説明"]
        const description =
          descProp?.type === "rich_text" ? getRichText(descProp.rich_text) : ""

        // Extract images
        const imagesProp = properties["写真"]
        const images: string[] = []
        if (imagesProp?.type === "files") {
          imagesProp.files.forEach((file) => {
            if (file.type === "file") {
              images.push(file.file.url)
            } else if (file.type === "external") {
              images.push(file.external.url)
            }
          })
        }

        // Extract slug
        const slugProp = properties["スラッグ"]
        const slug =
          slugProp?.type === "rich_text"
            ? getRichText(slugProp.rich_text) || page.id
            : page.id

        return {
          id: page.id,
          title,
          date: dateValue ? formatDate(dateValue) : "",
          category,
          description,
          images,
          slug,
        }
      })
  } catch (error) {
    console.error("Error fetching lab life posts from Notion:", error)
    return []
  }
}

// Get a single news item by slug
export async function getNewsItem(slug: string): Promise<NewsItem | null> {
  const news = await getNews()
  return news.find((item) => item.slug === slug) || null
}

// Get a single lab life post by slug
export async function getLabLifePost(slug: string): Promise<LabLifePost | null> {
  const posts = await getLabLifePosts()
  return posts.find((post) => post.slug === slug) || null
}
