// adminRoutes.json
export const adminRoutes = [
  {
    "name": "Dashboard",
    "path": "/admin/dashboard"
  },
  {
    "name": "Parking Stations",
    "path": "/admin/stations",
    "subRoutes": [
      {
        "name": "Create",
        "path": "/admin/stations/create"
      },
      {
        "name": "View",
        "path": "/admin/stations/view"
      }
    ]
  },
  {
    "name": "Analytics",
    "path": "/admin/analytics"
  },
  {
    "name": "User Feedback",
    "path": "/admin/user-feedback"
  }
]
