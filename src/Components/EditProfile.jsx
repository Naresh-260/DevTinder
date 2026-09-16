
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../Utils/constants";
import { addUser } from "../Utils/userSlice";
import FeedCard from "./FeedCard";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [PhotoUrl, setPhotoUrl] = useState(user?.PhotoUrl || "");
  const [Bio, setBio] = useState(user?.Bio || "");
  const [skills, setSkills] = useState(user?.skills || []);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setError("");
    setSaving(true);

    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          PhotoUrl,
          Bio,
          skills,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res?.data));

      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.log(err?.response?.data);
      setError(err?.response?.data || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value;

    setSkills(
      value
        .split(",")
        .map((skill) => skill.trim())
    );
  };

  if (!user) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_420px]">

        {/* =====================================================
            EDIT PROFILE
        ====================================================== */}
        <section>
          <div className="overflow-hidden rounded-3xl border border-base-content/10 bg-base-100 shadow-xl">

            {/* Header */}
            <div className="border-b border-base-content/10 bg-gradient-to-br from-primary/[0.08] via-transparent to-secondary/[0.05] px-6 py-7 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-mono text-xs font-bold text-primary">
                      {"</>"}
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      DevTinder
                    </span>
                  </div>

                  <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Edit your profile
                  </h2>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-base-content/50">
                    Make your profile stand out. Tell other developers who you
                    are, what you build and what technologies you work with.
                  </p>
                </div>

                <div className="hidden rounded-xl border border-success/20 bg-success/10 px-3 py-2 sm:block">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-success" />
                    <span className="text-xs font-medium text-success">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6 p-6 sm:p-8">

              {/* Personal information */}
              <div>
                <div className="mb-4">
                  <h3 className="text-sm font-bold">
                    Personal information
                  </h3>

                  <p className="mt-1 text-xs text-base-content/40">
                    Basic information shown on your developer profile.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  {/* First name */}
                  <div className="form-control">
                    <label htmlFor="firstName" className="label">
                      <span className="label-text text-xs font-semibold">
                        First name
                      </span>
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      className="input input-bordered w-full bg-base-200/50 transition focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Last name */}
                  <div className="form-control">
                    <label htmlFor="lastName" className="label">
                      <span className="label-text text-xs font-semibold">
                        Last name
                      </span>
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Your last name"
                      className="input input-bordered w-full bg-base-200/50 transition focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Age */}
                  <div className="form-control">
                    <label htmlFor="age" className="label">
                      <span className="label-text text-xs font-semibold">
                        Age
                      </span>
                    </label>

                    <input
                      id="age"
                      type="number"
                      min="18"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Your age"
                      className="input input-bordered w-full bg-base-200/50 transition focus:border-primary focus:outline-none"
                    />
                  </div>

                  {/* Photo URL */}
                  <div className="form-control">
                    <label htmlFor="photoUrl" className="label">
                      <span className="label-text text-xs font-semibold">
                        Profile photo URL
                      </span>
                    </label>

                    <input
                      id="photoUrl"
                      type="url"
                      value={PhotoUrl}
                      onChange={(e) => setPhotoUrl(e.target.value)}
                      placeholder="https://..."
                      className="input input-bordered w-full bg-base-200/50 transition focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-base-content/10" />

              {/* About */}
              <div className="form-control">
                <label htmlFor="bio" className="label">
                  <span className="label-text text-xs font-semibold">
                    About you
                  </span>

                  <span className="label-text-alt text-base-content/40">
                    {Bio?.length || 0}/500
                  </span>
                </label>

                <textarea
                  id="bio"
                  rows={5}
                  maxLength={500}
                  value={Bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tell other developers about yourself, what you build, your interests..."
                  className="textarea textarea-bordered min-h-[130px] resize-none bg-base-200/50 leading-6 transition focus:border-primary focus:outline-none"
                />
              </div>

              {/* Skills */}
              <div className="form-control">
                <label htmlFor="skills" className="label">
                  <span className="label-text text-xs font-semibold">
                    Skills & technologies
                  </span>

                  <span className="label-text-alt text-base-content/40">
                    Separate with commas
                  </span>
                </label>

                <input
                  id="skills"
                  type="text"
                  placeholder="React, Node.js, MongoDB..."
                  value={skills.join(", ")}
                  onChange={handleSkillsChange}
                  className="input input-bordered w-full bg-base-200/50 transition focus:border-primary focus:outline-none"
                />

                {/* Skill chips */}
                {skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={`${skill}-${index}`}
                        className="rounded-lg border border-primary/15 bg-primary/10 px-3 py-1.5 font-mono text-[11px] font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-error/20 bg-error/10 px-4 py-3 text-sm text-error"
                >
                  <div className="flex items-center gap-2">
                    <span>!</span>
                    <span>{error}</span>
                  </div>
                </div>
              )}

              {/* Save */}
              <div className="border-t border-base-content/10 pt-6">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={saving}
                  className="btn btn-primary h-12 w-full rounded-xl border-0 text-sm font-bold shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-primary/30 disabled:translate-y-0 sm:w-auto sm:min-w-[180px]"
                >
                  {saving ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75 10 18l9.5-12"
                        />
                      </svg>

                      Save changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LIVE PREVIEW
        ====================================================== */}
        <aside className="xl:sticky xl:top-24 xl:self-start">
          <div className="mb-3 flex items-center justify-between px-1">
            <div>
              <h3 className="text-sm font-bold">
                Profile preview
              </h3>

              <p className="mt-1 text-xs text-base-content/40">
                This is how other developers see you.
              </p>
            </div>

            <span className="badge badge-ghost gap-1 text-[10px]">
              Live
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
            </span>
          </div>

          <div className="rounded-3xl border border-base-content/10 bg-base-100 p-3 shadow-xl">
            <FeedCard
              user={{
                firstName,
                lastName,
                age,
                PhotoUrl,
                Bio,
                skills,
              }}
            />
          </div>
        </aside>
      </div>

      {/* =====================================================
          SUCCESS TOAST
      ====================================================== */}
      {showToast && (
        <div className="toast toast-top toast-center z-[9999] mt-20">
          <div className="alert alert-success rounded-xl border border-success/20 shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <span className="font-medium">
              Profile updated successfully.
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;

