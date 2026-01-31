type NAV_ITEMS = [
  {
    type: "link",
    label: string,
    href: string,
  },
  {
    type: "dropdown",
    label: string,
    items: {
      label: string,
      href: string,
    }[]
  },
]

export const NAV_ITEMS: NavItem[] = [
  {
    type: "link",
    label: "Beranda",
    href: "/",
  },

  {
    type: "link",
    label: "Tentang",
    href: "/about",
  },
  {
    type: "link",
    label: "Visi & Misi",
    href: "/visi-misi",
  },
  {
    type: "link",
    label: "Anggota",
    href: "/members",
  },
  {
    type: "dropdown",
    label: "Kegiatan",
    items: [
      {
        label: "Program Kerja",
        href: "/program-kerja"
      },
      {
        label: "Berita",
        href: "/news"
      }
    ]
  }
]
