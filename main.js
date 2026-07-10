$(document).ready(function () {
  console.log("ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;

        // =========================
        // ENTER VIEW
        // =========================
        if (entry.isIntersecting) {
          switch (section.id) {
            // ---------------- HOME ----------------
            case "homePage": {
              const items = section.querySelectorAll(".item");
              const socials = section.querySelectorAll("a");
              const imgContainer = section.querySelector(".imgContainer");

              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("typing");
                }, index * 500);
              });

              const typingDuration = items.length * 500;

              socials.forEach((social, index) => {
                setTimeout(
                  () => {
                    social.classList.add("fadeInSlideUp");
                  },
                  typingDuration + index * 100,
                );
              });
              if (imgContainer) imgContainer.classList.add("fadeInSlideLeft");

              break;
            }

            // ---------------- ABOUT ----------------
            case "aboutMe": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const myInfo = section.querySelector(".myInfo");
              const imgContainer = section.querySelector(".imgContainer");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.add("fadeInSlideDown");
                  });
                });
              }
              if (imgContainer) {
                imgContainer.classList.add("fadeInSlide");

                setTimeout(() => {
                  if (myInfo) myInfo.classList.add("slideRight");
                }, 700);
              }

              break;
            }

            // ---------------- SKILLS ----------------
            case "skills": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const cards = section.querySelectorAll(".card");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.add("fadeInSlideDown");
                  });
                });
              }

              if (cards) {
                cards.forEach((card, index) => {
                  setTimeout(() => {
                    card.classList.add("fadeInSlideUp");
                  }, index * 200);
                });
              }

              break;
            }

            //------------projects-------------
            case "projects": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const cards = section.querySelectorAll(".card");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.add("fadeInSlideDown");
                  });
                });
              }

              if (cards) {
                cards.forEach((card, index) => {
                  setTimeout(() => {
                    card.classList.add("fadeInSlideUp");
                  }, index * 200);
                });
              }

              break;
            }
            case "contactMe": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const contacts = section.querySelectorAll(".contact");
              const messages = section.querySelectorAll(".message");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.add("fadeInSlideDown");
                  });
                });
              }
              if (contacts) {
                contacts.forEach((contact, index) => {
                  setTimeout(() => {
                    contact.classList.add("fadeInSlideRight");
                  }, index * 100);
                });
              }

              if (messages) {
                messages.forEach((message, index) => {
                  setTimeout(() => {
                    message.classList.add("fadeInSlideLeft");
                  }, index * 100);
                });
              }

              break;
            }
          }
        }

        // =========================
        // LEAVE VIEW
        // =========================
        else {
          switch (section.id) {
            // ---------------- HOME ----------------
            case "homePage": {
              const items = section.querySelectorAll(".item");
              const socials = section.querySelectorAll("a");
              const imgContainer = section.querySelector(".imgContainer");

              items.forEach((item) => {
                item.classList.remove("typing");
              }, 500);

              socials.forEach((social) => {
                social.classList.remove("fadeInSlideUp");
              }, 500);
              if (imgContainer)
                imgContainer.classList.remove("fadeInSlideLeft");

              break;
            }

            // ---------------- ABOUT ----------------
            case "aboutMe": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const myInfo = section.querySelector(".myInfo");
              const imgContainer = section.querySelector(".imgContainer");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.remove("fadeInSlideDown");
                  });
                });
              }
              if (myInfo) myInfo.classList.remove("slideRight");
              if (imgContainer) imgContainer.classList.remove("fadeInSlide");

              break;
            }

            // ---------------- SKILLS ----------------
            case "skills": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const cards = section.querySelectorAll(".card");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.remove("fadeInSlideDown");
                  });
                });
              }

              if (cards) {
                cards.forEach((card) => {
                  setTimeout(() => {
                    card.classList.remove("fadeInSlideUp");
                  });
                });
              }

              break;
            }

            // ---------------- projects ----------------
            case "projects": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const cards = section.querySelectorAll(".card");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.remove("fadeInSlideDown");
                  });
                });
              }

              
              if (cards) {
                cards.forEach((card) => {
                  setTimeout(() => {
                    card.classList.remove("fadeInSlideUp");
                  });
                });
              }

              break;
            }

            case "contactMe": {
              const sectionTitles = section.querySelectorAll(".sectionTitle");
              const contacts = section.querySelectorAll(".contact");
              const messages = section.querySelectorAll(".message");

              if (sectionTitles) {
                sectionTitles.forEach((sectionTitle, index) => {
                  setTimeout(() => {
                    sectionTitle.classList.remove("fadeInSlideDown");
                  });
                });
              }
              if (messages) {
                messages.forEach((message) => {
                  setTimeout(() => {
                    message.classList.remove("fadeInSlideLeft");
                  });
                });
              }

              if (contacts) {
                contacts.forEach((contact, index) => {
                  setTimeout(() => {
                    contact.classList.remove("fadeInSlideRight");
                  });
                });
              }

              break;
            }
          }
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  document.querySelectorAll("section").forEach((sec) => {
    observer.observe(sec);
  });
});
