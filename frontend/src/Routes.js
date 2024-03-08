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
        "path": "/admin/station/create"
      },
      {
        "name": "View",
        "path": "/admin/station/view"
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
