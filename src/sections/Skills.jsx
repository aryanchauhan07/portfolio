
          {/*the skill section*/}

          <div className="toolbox-section relative w-full min-h-screen px-6 py-32 text-white overflow-hidden">
            
            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Helping startups and brands to craft expressive and engaging
                solutions for their software needs.
              </h2>

              {/* Icons Grid */}
              <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-center items-center">
                {[
                  "webflow.png",
                  "hotjar.png",
                  "notion.png",
                  "figma.png",
                  "vercel.png",
                  "bootstrap.png",
                ].map((icon, i) => (
                  <div
                    key={i}
                    className="bg-black/60 p-4 rounded-2xl flex justify-center items-center hover:scale-105 transition"
                  >
                    <img
                      src={`./${icon}`}
                      alt={`tool-${i}`}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
