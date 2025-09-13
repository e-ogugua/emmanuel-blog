export default function TestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <h1 className="text-4xl font-bold mb-6">Test Page</h1>
      
      <div className="space-y-6">
        <div className="p-6 bg-card rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Colors</h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-24 h-24 bg-primary rounded"></div>
            <div className="w-24 h-24 bg-secondary rounded"></div>
            <div className="w-24 h-24 bg-accent rounded"></div>
            <div className="w-24 h-24 bg-destructive rounded"></div>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Typography</h2>
          <div className="space-y-4">
            <p className="text-lg">This is a paragraph with some text to test the typography settings.</p>
            <p className="text-muted-foreground">This is muted text.</p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
              Test Button
            </button>
          </div>
        </div>

        <div className="p-6 bg-card rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-3">Dark Mode</h2>
          <p className="mb-4">Toggle dark mode to see if the theme changes work.</p>
          <div className="p-4 bg-muted rounded">
            <p>This is a muted background that should change in dark mode.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
