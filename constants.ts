
import { Project, Skill } from './types';

export const PERSONAL_INFO = {
  fullName: "Muhammad Afif Dhiyaulhaq",
  role: "Mahasiswa Teknologi Informasi | Junior Web Developer",
  education: "Semester 5 - Teknik Informatika di Universitas Mataram",
  shortBio: "Seorang mahasiswa IT yang antusias mempelajari pengembangan web. Saat ini fokus memperdalam JavaScript dan React untuk membangun aplikasi web yang interaktif.",
  aboutDetailed: "Halo! Saya adalah mahasiswa semester 5 yang sedang menempuh perjalanan menjadi seorang pengembang web. Minat saya berfokus pada sisi frontend, namun saya juga sedang mengeksplorasi backend menggunakan PHP dan Node.js. Saya percaya bahwa setiap baris kode adalah kesempatan untuk belajar hal baru.",
  learningStatus: "Sedang Aktif Belajar: React.js, Tailwind CSS, dan Fundamental UI/UX Design.",
  email: "f1d02310125@student.unram.ac.id",
  github: "https://github.com/afifdhiya",
  linkedin: "https://linkedin.com/in/afifdhiya",
  instagram: "https://instagram.com/afif.dhiya"
};

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "PHP", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Sistem Manajemen Inventaris Toko",
    description: "Tugas akhir mata kuliah Pemrograman Web. Aplikasi CRUD sederhana untuk mencatat stok barang masuk dan keluar.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    status: "Localhost",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Aplikasi Todo List Interaktif",
    description: "Proyek latihan untuk memahami manipulasi DOM dan LocalStorage menggunakan JavaScript murni.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Localhost",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Landing Page Portofolio V1",
    description: "Desain portofolio pertama saya yang dibuat saat baru mempelajari layouting CSS Flexbox.",
    technologies: ["HTML", "CSS"],
    status: "Localhost",
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Kalkulator Zakat Digital",
    description: "Mini project menggunakan logika JavaScript untuk menghitung berbagai macam jenis zakat.",
    technologies: ["JavaScript", "HTML", "Tailwind"],
    status: "Localhost",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  }
];
