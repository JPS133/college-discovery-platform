"use client";

import { useState } from "react";

export default function SaveCollegeButton({
  collegeId,
}: {
  collegeId: string;
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSave() {
    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(
        "/api/save-college",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            collegeId,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage(
          "✅ College saved successfully!"
        );
      } else {
        setMessage(
          data.error || "⚠️ College already saved"
        );
      }
    } catch (error) {
      setMessage(
        "❌ Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-6">
      <button
        onClick={handleSave}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
      >
        {loading
          ? "Saving..."
          : "💾 Save College"}
      </button>

      {message && (
        <p className="mt-3 text-sm text-green-400">
          {message}
        </p>
      )}
    </div>
  );
}