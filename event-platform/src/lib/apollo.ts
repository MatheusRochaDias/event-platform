import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({

    uri : 'https://api-sa-east-1.graphcms.com/v2/cl4npkmh40j6101ywe5q7ehgl/master',
    headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYyMTg2MTYsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG5wa21oNDBqNjEwMXl3ZTVxN2VoZ2wvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiODQ2ZGIyYzItYjM0My00MWViLWE0NDQtMTlmYjkzYzE1MzUyIiwianRpIjoiY2w0dXRzdmRtMTd3eTAxdWQycnk5ODNkdiJ9.kY9bEmpQHFwrF5xKYlLbd5wOOEX8DlZCZWWoNj6C8AD4FpdwQUJMHuHdH5aQ91_bW11F0UDjYQVig19xJn05nZ-77efjEPJb-x9jIW2wwd6XwbGDfVHYRizYLfGQ1MooEgPe334tk31cbO6CU9XCa28ayWHaGKuA8HadBm27zIA5W19gHVGXxEpCIehuiJUmn6DAhTuZBUe2zfGhCr3qqI8dP1gOhylV5fjX-N8y7CrHLdacuHXXcLZHkLg413uRqWZc1sNApUkCLR1C5CN9pFsxOtXHfilnJps6kI4LZH2FTqzJg_CmDQmPu9V86nfrWyJeSFPp8l2YwwE98zfivbbtxK-kAGw3AaNbq7Or0_VR7LiBx0YB4MYwQZfx1lwdgtleUki_MTBViOWU7i1LYO-XJa0hifpU579LAvj9R_TTVjgMHa2LyrvzG_OsQ0TvAafBz3ciOPq3VyrrjzuYVGTTzVfX9H6iqX-QCGHbo9Hk7_u6fRCy0ZeOECui_tDfMyUoDQp7kDD7qajwvJxQz7VnV7RO0OfwhaTTehe1Xtiyy-RYNiHFef31jFe1oRRdtKrs2mk5KV5HKmCbJx1oiWrmCB5sebizMIBhXF3cVpS4KnxfC6IDIMwcu1dBi_6UhE14nz75AU4PhTW_VCSnadIFGnDltInzWuyKtHjN06M`
    },
    cache: new InMemoryCache()
})