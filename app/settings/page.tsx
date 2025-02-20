import ProfileSettings from "@/components/ProfileSettings"

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-10">
        <h1 className="mb-8 text-3xl font-bold">Profile Settings</h1>
        <ProfileSettings />
      </div>
    </main>
  )
} 