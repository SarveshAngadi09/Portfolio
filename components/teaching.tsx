import { Presentation, Calendar } from "lucide-react"
import { SectionLabel } from "./about"

const talks = [
  {
    title: "Hands-On Computer Vision with OpenCV & Python",
    venue: "IEEE Student Chapter Workshop",
    date: "March 2025",
    type: "Workshop",
    description:
      "A 3-hour workshop covering image processing fundamentals, feature detection, and real-time object tracking for 60+ attendees.",
  },
  {
    title: "Deep Learning for Visual Perception in Robotics",
    venue: "RoboCon Conference",
    date: "November 2024",
    type: "Talk",
    description:
      "Invited talk on deploying neural networks for real-time perception on edge devices, covering architecture design and TensorRT optimization.",
  },
  {
    title: "Camera Calibration: Theory to Practice",
    venue: "University Graduate Seminar",
    date: "September 2024",
    type: "Seminar",
    description:
      "Graduate-level seminar on geometric camera models, intrinsic/extrinsic calibration, and multi-view geometry fundamentals.",
  },
  {
    title: "Introduction to ROS2 for Autonomous Systems",
    venue: "Robotics Club Bootcamp",
    date: "June 2024",
    type: "Workshop",
    description:
      "Two-day intensive bootcamp introducing ROS2 concepts, including topics, services, and building a simple perception node.",
  },
  {
    title: "Visual SLAM: Algorithms and Applications",
    venue: "Tech Meetup Berlin",
    date: "February 2024",
    type: "Talk",
    description:
      "Lightning talk summarizing key visual SLAM approaches from MonoSLAM to ORB-SLAM3 with live demo on a mobile robot.",
  },
]

export function Teaching() {
  return (
    <section id="teaching" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Teaching & Talks" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Workshops & presentations
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Sharing knowledge through workshops, talks, and seminars on computer vision, robotics, and deep learning.
        </p>

        <div className="mt-12 space-y-4">
          {talks.map((talk, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Presentation className="h-3 w-3" />
                      {talk.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {talk.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-card-foreground">{talk.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{talk.venue}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">{talk.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
