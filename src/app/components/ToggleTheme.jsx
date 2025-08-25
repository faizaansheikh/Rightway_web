"use client";
import React from 'react'
import { useTheme } from "next-themes";
import Form from 'react-bootstrap/Form';
function ToggleTheme() {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label=""
                onChange={(e)=>setTheme((theme === "light" && e.target.checked) ? "dark" : "light")}
            />
            {/* <button
                className="bg-black text-white px-4 py-2 my-2"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button> */}
        </div>
    )
}

export default ToggleTheme