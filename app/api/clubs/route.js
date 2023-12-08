import { NextResponse } from "next/server"

export function GET(req){
    const clubs = 
    {
        "clubs": [
          {
            "clubName": "MBA Club",
            "membersJoined": 12000,
            "shortNote": "A community for MBA students and alumni, engaging in discussions about various business administration strategies, networking opportunities, career advancements, and entrepreneurship insights."
          },
          {
            "clubName": "Meme Club",
            "membersJoined": 13000,
            "shortNote": "A fun-filled platform dedicated to humor, meme trends, and internet culture, encouraging discussions, sharing, and laughter through viral content and jokes."
          },
          {
            "clubName": "Finance Club",
            "membersJoined": 14500,
            "shortNote": "Delve into the world of finance, investments, stock markets, financial planning, and global economy discussions, offering insights and educational resources."
          },
          {
            "clubName": "Design Club",
            "membersJoined": 11200,
            "shortNote": "A creative hub for designers across industries to exchange ideas, explore design principles, innovative approaches, and collaborate on design projects."
          },
          {
            "clubName": "Product Club",
            "membersJoined": 12050,
            "shortNote": "Focusing on product ideation, development, management strategies, user experience, and successful product launches within competitive markets."
          },
          {
            "clubName": "Marketing Club",
            "membersJoined": 13800,
            "shortNote": "Dive into consumer behavior, marketing strategies, digital campaigns, branding techniques, and innovative approaches to captivate target audiences."
          },
          {
            "clubName": "Photography Club",
            "membersJoined": 10500,
            "shortNote": "A creative space for photographers to share insights, techniques, explore diverse photography genres, and engage in visual storytelling."
          },
          {
            "clubName": "Anime Club",
            "membersJoined": 12500,
            "shortNote": "For passionate anime enthusiasts discussing diverse genres, series analysis, cultural impact, and fostering a community around shared anime interests."
          },
          {
            "clubName": "Placements Club",
            "membersJoined": 13200,
            "shortNote": "Supporting career aspirants with placement guidance, interview preparation, soft skill development, and industry insights for professional success."
          },
          {
            "clubName": "Startup Club",
            "membersJoined": 14300,
            "shortNote": "Empowering budding entrepreneurs by sharing startup ideas, strategies, resources, mentorship, and fostering a collaborative startup ecosystem."
          },
          {
            "clubName": "Bangalore Club",
            "membersJoined": 11500,
            "shortNote": "A forum centered on events, networking sessions, and discussions focused on Bangalore's thriving business landscape, tech industry, and startups."
          },
          {
            "clubName": "Tech Club",
            "membersJoined": 14200,
            "shortNote": "A platform to explore emerging tech trends, innovations, breakthroughs, and discussions on the ever-evolving technology landscape."
          },
          {
            "clubName": "AI Club",
            "membersJoined": 13700,
            "shortNote": "Dedicated to artificial intelligence, machine learning, robotics, and comprehensive discussions on AI's applications, impacts, and future advancements."
          }
        ]
      }

      return NextResponse.json(clubs)
}