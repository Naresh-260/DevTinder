
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);

  if (!user) {
    return (
      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-base-200 px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
              />
            </svg>
          </div>

          <h1 className="text-xl font-bold">
            Profile unavailable
          </h1>

          <p className="mt-2 text-sm text-base-content/50">
            Please log in to view your profile.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-base-200">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-[130px]" />
        <div className="absolute bottom-[-150px] left-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        {/* Page heading */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                DevTinder
              </span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Your profile
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/50">
              Keep your profile up to date so other developers can discover
              you and understand what you build.
            </p>
          </div>

          {/* Profile status */}
          <div className="flex w-fit items-center gap-2 rounded-full border border-success/20 bg-success/10 px-3 py-2">
            <span
              className="h-2 w-2 rounded-full bg-success"
              aria-hidden="true"
            />

            <span className="text-xs font-medium text-success">
              Profile active
            </span>
          </div>
        </div>

        {/* Main profile container */}
        <div className="relative">
          {/* subtle glow */}
          <div
            className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 blur-xl"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[28px] border border-base-content/10 bg-base-100/95 shadow-2xl backdrop-blur-xl">

            {/* Top decorative bar */}
            <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

            {/* Profile header */}
            <div className="border-b border-base-content/10 px-5 py-6 sm:px-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                {/* User identity */}
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl bg-base-300 ring-4 ring-base-200 sm:h-20 sm:w-20">
                      <img
                        src={user.PhotoUrl}
                        alt={`${user.firstName}'s profile`}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                    </div>

                    <span
                      className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px] border-base-100 bg-success"
                      aria-label="Profile online"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2 className="truncate text-xl font-bold sm:text-2xl">
                      {user.firstName}
                      {user.lastName && ` ${user.lastName}`}
                    </h2>

                    {user.email && (
                      <p className="mt-1 truncate text-sm text-base-content/50">
                        {user.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Developer badge */}
                <div className="flex w-fit items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2">
                  <span className="font-mono text-xs font-bold text-primary">
                    {"</>"}
                  </span>

                  <span className="text-xs font-semibold text-primary">
                    Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Existing edit profile UI */}
            <div className="p-5 sm:p-8 lg:p-10">
              <EditProfile user={user} />
            </div>
          </div>
        </div>

        {/* Bottom hint */}
        <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-base-content/30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.956 11.956 0 0 1 3.598 6 11.953 11.953 0 0 1 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75A11.956 11.956 0 0 1 12 2.714Z"
            />
          </svg>

          <span>
            Your profile information is used to help you find better
            connections.
          </span>
        </div>
      </div>
    </main>
  );
};

export default Profile;

