import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className="error--page">
            <div className="error--center">
                <h1>Oops a dead end...</h1>
                <Link to="/">back home</Link>
            </div>
        </div>
    )
}
