"use client";

export default function SaveCollegeButton({
  collegeId,
}: {
  collegeId: string;
}) {
  async function handleSave() {
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

    if (res.ok) {
      alert("College Saved!");
    } else {
      alert("Save failed");
    }
  }

  return (
    <button
      onClick={handleSave}
      className="bg-green-600 text-white px-4 py-2 rounded mt-4"
    >
      Save College
    </button>
  );
}