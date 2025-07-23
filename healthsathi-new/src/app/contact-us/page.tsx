export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-foreground-secondary">
            We&rsquo;re here to help you. Reach out with any questions or concerns you may have.
          </p>
        </header>

        <div className="bg-card text-card-foreground shadow-xl rounded-lg overflow-hidden border border-border">
          {/* Calendar Embed Section */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Schedule a Meeting</h2>
            <p className="mb-6 text-foreground-secondary">
              Book a time slot that works for you using the calendar below.
            </p>
            <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0tzjZbzfInAlNj_4bVNgToaNdmna_DugqheSjup-wBMCTPh1o_XFc0gIeGAmzDk4Oob9KOwIJA?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="750"
                frameBorder="0"
                allowFullScreen
                title="Google Calendar Appointments"
                className="bg-white"
              ></iframe>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="p-6 md:p-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Contact Us Anytime
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground">Phone</h3>
                <a href="tel:+17703620543" className="text-primary hover:text-primary-light transition duration-150 ease-in-out">
                  +1 (770) 362-0543
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Email</h3>
                <a href="mailto:jaytirthjoshi@health-sathi.org" className="text-primary hover:text-primary-light transition duration-150 ease-in-out">
                  jaytirthjoshi@health-sathi.org
                </a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Address</h3>
                <p className="text-foreground-secondary">
                  Based and operated in USA and India
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-lg font-medium text-foreground">Follow Us</h3>
              <p className="mt-2 text-foreground-secondary">
                Stay connected with us on social media! (Links coming soon)
              </p>
              {/* Add social media icons/links here when available */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 