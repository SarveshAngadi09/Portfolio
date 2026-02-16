import { ExternalLink, Github } from "lucide-react"
import { SectionLabel } from "./about"

const projects = [
  {
    title: "VisualSLAM Pipeline",
    description:
      "A modular visual SLAM system combining ORB feature tracking with loop closure detection for real-time robot localization in GPS-denied environments.",
    stack: ["C++", "OpenCV", "ROS2", "Eigen"],
    github: "https://github.com",
  },
  {
    title: "Multi-Camera Calibration Toolkit",
    description:
      "An open-source calibration framework for multi-camera rigs supporting fisheye, pinhole, and omnidirectional models with sub-pixel accuracy.",
    stack: ["Python", "NumPy", "OpenCV", "Ceres Solver"],
    github: "https://github.com",
  },
  {
    title: "Real-Time Object Detection on Jetson",
    description:
      "Optimized YOLOv8 deployment pipeline for NVIDIA Jetson AGX Orin, achieving 45 FPS inference with TensorRT quantization.",
    stack: ["Python", "PyTorch", "TensorRT", "CUDA"],
    github: "https://github.com",
  },
  {
    title: "Point Cloud Segmentation",
    description:
      "A PointNet++-based model for semantic segmentation of outdoor LiDAR scenes, trained on custom annotated datasets for autonomous navigation.",
    stack: ["Python", "PyTorch", "Open3D", "ROS2"],
    github: "https://github.com",
  },
  {
    title: "Visual Place Recognition",
    description:
      "NetVLAD-inspired retrieval system for robust visual place recognition across seasons and lighting conditions using learned descriptors.",
    stack: ["Python", "PyTorch", "FAISS", "HDF5"],
    github: "https://github.com",
  },
  {
    title: "Stereo Depth Estimation",
    description:
      "End-to-end stereo matching network with cost volume aggregation and disparity refinement for dense depth maps on embedded hardware.",
    stack: ["Python", "PyTorch", "ONNX", "OpenCV"],
    github: "https://github.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-muted/50 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel label="Projects" />
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Open-source projects and research implementations spanning perception, calibration, and deep learning for robotics.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base font-semibold text-card-foreground">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary/8 px-2 py-0.5 font-mono text-xs text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View all projects on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
