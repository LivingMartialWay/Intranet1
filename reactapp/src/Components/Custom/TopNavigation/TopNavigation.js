import * as React from "react";
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Link from "@cloudscape-design/components/link";

export default () => {
    return (
        <TopNavigation
            identity={{
                href: "/",
                title: 'WDVCB',
                logo: {
                    src:
                        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0MTIgMTY2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MTIgMTY2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0QxMTI0Mjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1My4zNiw0Ni4yOGMwLjc4LDQsMC43OCw3LjMxLDAuODUsMTEuNzJjLTIuMDMtMC4wNy00LjU2LDAuNjMtNS45MS0wLjRjLTAuODYtMi4xNi0yLjk1LTMuODMtNC42Mi00LjM2CgkJYy0xLjg0LTAuNDItNC45NS0wLjU1LTUuNzgsMi43NGMtMC42OSwyLjgsMi4zNiwzLjg5LDUuNzYsNS4wN2M1LjA0LDEuNzgsMTIuNDMsNC4xOSwxMy43NCwxMS4xMWMwLjIzLDQuMDMtMC4xMiw3LjU1LTIuNjksMTAuODIKCQljLTQuNyw0LjY4LTExLjQ3LDUuMjUtMTcuMzQsNS41OWMtMC41NSwwLjA0LTkuMDYtMC43Ny0xMi4yMy0xLjUxYy0wLjkzLTMuNDQtMC44NS04LjQxLTAuODUtMTEuNzNsNi4yMy0wLjM2CgkJYzEuMjQsMi4zMiwyLjg1LDcuMTMsOS4yMSw1LjczYzMuMzktMSwyLjk3LTQuNjgsMS40Ny01LjZjLTUuODctMi45Ny0xNC45OS00Ljg0LTE3LjQ1LTEyLjQzYy0xLjI0LTUuNjMsMC45MS0xMC4zMSw1LjY0LTEzLjkzCgkJQzEzNi42Myw0My4yMSwxNTIuMTksNDUuOTUsMTUzLjM2LDQ2LjI4eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5MS41OSw0Ni4xMmMwLjE5LDAuMTcsMi45LDAuODksMi42OSwyLjA1Yy0xLjQ1LDMuNTgtMS43OCw3LjQ2LTMuNiwxMS4wNmMtMS45LTAuOTktNC44MS0wLjQ2LTYuMDQtMi42CgkJYy0wLjQ0LTEuMjYsMC4yMy0yLjQtMC43NC0zLjI3Yy0xLjUzLTEuMDItNC41Ny0xLjkyLTcuNDgsMC45OGMtMy4zNiw0LjAxLTMuNDEsMTQuMzYsMC4zOSwxOS44NWMyLjM4LDIuOTksNi40MywzLjEzLDkuMzEsMi4wNAoJCWMyLjUyLTEuMDYsMS4zNi01LjIzLDQuMTMtNS4wMmMxLjQ3LTAuMDksNC40LTAuMjUsNC40LTAuMjVzMS4yLDguMjEsMS4yNSwxMi4yNWMtMTAuMTIsMy4xNS0yMy43OCw1LjU2LTMxLjM4LTEuODkKCQljLTguMzQtNi4zOC05Ljg2LTIyLjk2LTEuMTEtMzAuODFDMTc1LjU4LDM5LjgxLDE4OS4zMiw0NC45NiwxOTEuNTksNDYuMTJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzgzLjE3LDcwLjIxYy0wLjI3LTEuNi0yLjU4LTIuMDQtMi44OC0zLjRjLTAuMTItMC43NS0wLjIxLTEuNDctMC4zLTIuMTlsLTEuMjMtMjEuMTdsLTAuMTktMC42CgkJYy0wLjI1LTQuNC0yLjg1LTguMjgtNi45OC05LjUzbC0yLjY2LTAuNjFjLTkuMzYtMS4xMi0xNC42NywyLjc2LTE2LjYzLDMuOTdsLTAuMDItMS44MWwtMTUuMzIsMC44NGMwLDAtMC4xMywzLjY5LDAuNjIsNC43OQoJCWMwLjc1LDEuMTEsMi45MiwxLjM2LDMuNDcsMi44OWwxLjUsMjUuNGMwLDAtMC43NiwyLjAxLTIuMywyLjA4Yy0xLjU0LDAuMDctMi40NS0xLjExLTIuNjgtMi4wOWwtMS44NS0zMi45N2wtMTguMjUsMQoJCWMwLDAtMC4xMywzLjY5LDAuNjIsNC43OWMwLjc1LDEuMTEsMi45MiwxLjM2LDMuNDcsMi44OWwxLjQsMjUuNjNjMCwwLTEuMjMsMS4xNi0yLjIxLDIuMTRjLTAuODMsMS41Mi0wLjI5LDQuNTYtMC4yOSw0LjU2CgkJbDIwLjE0LTEuMTJjMC4wMiwwLjAzLDAuMDMsMC4wNSwwLjA0LDAuMDhsMTkuODMtMS4xM2MwLDAsMC4zNy0xLjExLTAuMDYtMy4zOWMtMC4yOC0xLjU5LTMuMDUtMi4yNC0zLjM2LTMuNgoJCWMwLDAtMS4xLTE5LjgxLTEuMTEtMTkuOTRjLTAuMTItMi4xNSwxLjY2LTQsMy45OS00LjEzYzIuMDEtMC4xMiw0LjA5LDEuMTIsNC4yLDMuMDljMC4wMiwwLjI4LDEuMDksMjEuMDksMS4wOSwyMS4wOQoJCXMtMS4yNSwxLjMzLTIuMjMsMi4zYy0wLjgzLDEuNTItMC42MSwzLjA1LDAuMDMsNC40OGwxOS45MS0xLjA3QzM4Mi45NCw3My41MiwzODMuNiw3Mi40OSwzODMuMTcsNzAuMjF6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE5LjQyLDEzMy4zMWMtMS4zNiwxLjkyLTQuODcsMi40NC03LjA4LDIuMzNjLTYuNDgtMC4zLTYuNDEtNS4yNS00Ljk4LTYuNzEKCQljNC43NS0zLjc2LDEwLjM5LTQuODIsMTUuNDgtNS44NWMxLjQ3LTAuMDgsMy4xLTAuNTQsNC45MS0xLjAyYy0wLjE4LTUuMTUtNC4xNS0yNC40MS0xOS43My0yMy41MgoJCWMtNC43LDAuMjctMTQuMjEsMi43Ni0xNy42MiwxMy41NGMtMC4yMiwwLjctMC4zNSwxLjI3LTAuNDIsMS43NGMtMC40OCwxLjcyLTAuODIsMy41LTEuMDIsNS4zMWwtMC4zNywwLjAyCgkJYy0wLjUtMi4zNi0wLjY4LTUuNDgtMS4wMi04LjIyYy0xLjE2LTcuNDgtNS4xMS0xNS4zNC0xMS43NS0xOS4wMmMwLjE3LTAuMTktMC4xOCwwLjAxLTAuMTgsMC4wMWMtMy4yNi0yLjM5LTcuNTMtMy4wNi0xMS40MS0zLjIxCgkJbC0wLjAxLTAuMThjMCwwLTExLjg2LDAuNTItMjQuNDIsMS4yNmMtOC44LDAuNTEtMTgsMC44Ni0yMy4zOSwyLjM5Yy0xMy4wNSwzLjcxLTIxLjA4LDEwLjk1LTIzLjM5LDIyLjEyCgkJYy0xLjcxLDguNzQsMS4wNSwxOC4zMyw4LjU0LDIzLjk4YzYuMTMsNC4yNSwxNC4xMiw1LjYzLDIxLjE2LDMuMzljNy40My0xLjksMTQuMTgtOS40NSwxNS4yMi0xNy4wNQoJCWMxLjE0LTcuMTEtMS44OS0xNC4xNC02Ljg3LTE4Ljk4YzAuMTksMC42NCwwLjMzLDEuMywwLjM3LDEuOTljMC4xLDEuNzctMC41OCw4Ljg5LTcuOSw5LjY1Yy04LjA3LDAuODQtMTMuNTUtNy44NS04LjAyLTE0LjkyCgkJYzQuNS01LjA0LDExLjQzLTUuOTksMTcuMjEtNC42NmMyLjA2LDAuNjIsNC41NCwyLjEzLDQuODQsNC4zMmwyLjM5LDQxLjk5Yy0wLjI3LDEuNjctMS41NCwxLjkzLTIuOTgsMi41NgoJCWMtMi42OCwxLjQ0LTEuMTgsNS4wNC0xLjIyLDcuNjJjMTIuMjctMC44OSwyNi4wOS0wLjU3LDM4LjA4LTMuMDljMTAuODMtMy41NywxNC4wNC0xNS4xNSwxNC4zOC0yNS4yOAoJCWMwLjE1LTAuNTYtMC4wOS0xLjY1LDAuNjMtMS44OGMwLjc4LDcuMTMsMy4zNCwxMy40Miw5LjQ2LDE3LjQ4YzguOTMsNS4wMSwxOS41MSwzLjQ5LDI4LjY2LTAuNTNjLTAuMDQtMy44Ni0wLjYxLTcuNTEtMS4wNC0xMS43MQoJCUMyMjEuMjcsMTI3LjQ1LDIyMC4zNSwxMzEuNTMsMjE5LjQyLDEzMy4zMXogTTE3MC4yMSwxMjkuMjJjLTAuNSw0LjA3LTEuMTcsOC41My00LjUxLDExLjI5Yy0yLjMyLDEuMjQtNS42NiwwLjctOC41NywxLjIzCgkJYzAsMC0yLjQ1LTM4Ljg4LTIuMzYtNDEuNDFjNC40LTAuMjUsOS43LTAuNzYsMTIuMTgsMy44OEMxNzAuMTgsMTEyLjY2LDE3MC4wOCwxMjAuNCwxNzAuMjEsMTI5LjIyeiBNMjA1LjM0LDEwOS43NAoJCWMxLjIyLTEuMTcsMi45LTEuMiw0LjE4LTAuNzljMS41LDAuMDEsMi4zNSwyLjQ0LDIuMzUsMi40NHMxLjM5LDIuNjEtNC4wNiw2LjNjLTIuNzIsMi4yOS0zLDIuMi00LjU5LDMuMzkKCQlDMjAyLjgyLDExNy4yNCwyMDIuMzgsMTEyLjY3LDIwNS4zNCwxMDkuNzR6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU2Ljk2LDguNTdjMCwwLDAuMDYsMC4wMSwwLjE1LDAuMDJjMC4wMS0wLjAxLDAuMDQtMC4wMiwwLjA0LTAuMDNMMjU2Ljk2LDguNTd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyNi45NiwzNC4wNmM0LjE4LTAuMjQsNy4zNy0zLjgyLDcuMTMtOGMtMC4yNC00LjE4LTMuODItNy4zNy04LTcuMTNjLTQuMTgsMC4yMy03LjM3LDMuODItNy4xMyw3Ljk5CgkJCUMzMTkuMiwzMS4xLDMyMi43OSwzNC4zLDMyNi45NiwzNC4wNnoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjM4LjExLDYxLjJjLTAuMTYtMi43MS0wLjgzLTUuMjUtMS44OS03LjU5Yy0xLjcyLTQuMTctNy40LTEzLjU3LTIxLjM4LTEyLjc5CgkJCUMyMDAuMTYsNDEuNjMsMTk1LjksNTMuMDgsMTk1LjM2LDU1Yy0xLjAyLDIuNy0xLjUsNS42NC0xLjMzLDguN2MwLjIyLDMuODksMS40OSw3LjQ3LDMuNSwxMC41MmMxLjI5LDIuMTYsMi45NSw0LjExLDUsNS42OQoJCQljMi4zNCwxLjg2LDUuMDgsMi45Nyw3Ljk3LDMuNTJjMi4xNiwwLjU1LDQuNDUsMC43OSw2LjgsMC42NWMzLjIzLTAuMTgsNi4yNC0xLjA2LDguOTQtMi40NGMwLjY1LTAuMjUsMS4zLTAuNTIsMS45MS0wLjgKCQkJYzQuNzgtMi43NCw3LjkzLTcuNTMsOS4yMS0xMi43NkMyMzcuOTcsNjUuOSwyMzguMjQsNjMuNTgsMjM4LjExLDYxLjJ6IE0yMTEuMDksNTUuNzFjMC4wOC0yLjk2LDItNS4zOCw0LjUxLTUuNTIKCQkJYzIuNjgtMC4xNiw1LjAxLDIuMzMsNS4xOSw1LjU2YzAsMC4wMSwwLDAuMDIsMCwwLjAzYzAuOTUsNC4yOSwxLjIzLDkuOSwwLjcxLDEzLjQ2Yy0wLjE1LDIuODgtMi4wNCw1LjItNC41MSw1LjM0CgkJCWMtMi42OCwwLjE1LTUuMDEtMi4zMy01LjItNS41NmMtMC4wMS0wLjE0LTEuMjUtNC42NC0wLjg1LTEyLjU3QzIxMS4zNCw0OC41MSwyMTEuMDQsNTUuOTUsMjExLjA5LDU1LjcxeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMjAuMTYsNzUuMDVsLTAuMzcsMC4wMmMtMy4yNC0yLjAyLTYuMjktMy44Ny05LjUzLTUuOWMwLDAtMTAuMTgtNi0xMS4yNC02LjcyCgkJCWMtMi4zLTEuNzEtMy45Ni00LjkyLTMuNTgtOC4wN2MyLjI2LDAuOTgsMy42NiwyLjkyLDUuNzUsNC4wOWM0LjIsMi43LDkuOTIsMy4xMSwxNC4xOCwwLjNjMy41NS0yLjIzLDQuNC02LjY5LDMuNjItMTAuNjkKCQkJYy0xLjIyLTUuMjYtNS44Mi04LjUtMTAuMzItMTAuMDhjLTkuNjctMy4wNC0xNS4wMSwxLjIyLTE2LjM3LDAuMDFjLTYuNDQtOS43NS0xMy42NC0xOS44Mi0yMy45My0yNi4wNGMwLDAtNy45Ni00LjU0LTE0Ljg5LTMuMDEKCQkJYy03LjYxLDEuNjgtMTUuNTYsNy4zNy0xMi4xOCwyMC4yMmMwLDAsMi45OSw3Ljk5LDExLjgyLDguODdsLTAuNDEtNC4wM2MtMC4xNS0yLjU3LDEuNzMtNS4yNSw0LjA1LTYuNDgKCQkJYzEuMjQtMC44MSwzLjk5LTAuOTYsNS42NS0wLjg3YzkuNDksMS44NSwxNi44OSw5LjE1LDIzLjM2LDE2LjE1Yy0yLjYxLDIuNTQtNC43Niw2Ljg5LTUuNjMsMTAuOAoJCQljLTMuNywxOS4xNiwxNy4zNCwyNi42LDI5LjIsMzQuNzVjMC45Mi0wLjA1LDkuOTgsNy4zNCwxMi40NSwxMS44YzQuNzEsOC4zOCw0Ljc3LDE3Ljg1LTIuMzIsMjYuOTkKCQkJYy03LjA5LDkuMTQtMTguOTIsOS4zNS0yNC4zNyw4LjJjLTMuNTItMC43NS05LjItMy4zNC0xMC45OC01LjQ1YzAsMC02Ljk5LTQuODItNi45Ny0xMi42NmMwLjAxLTcuODQsMy41Ni0xMS43OSw4Ljc1LTE0LjMKCQkJYzQuNjctMS45MiwxMC4yMy0xLjEzLDEzLjk0LDIuNTJjMi43NiwzLjM0LDMuOTgsOC42LDIuNTUsMTIuNTVjLTEuNDMsMy45NS01LjQ5LDYuOTQtOS40OSw3LjcyYzAuNDcsMS44MSw2LjIxLDUuNjksMTIuMTQsNC43OAoJCQljMy45Mi0wLjYsMTMuODYtNC4wNiwxNS45LTEzYzIuMDQtOC45NC0xLjUyLTE3LjAyLTguMDgtMjIuMzVjLTEwLjA5LTguNDQtMjMuNjktNi45Ny0zMC41NS0zLjU5CgkJCWMtOC4wOCwzLjQxLTEzLjg1LDEyLjAxLTE0LjY0LDIwLjdjLTEuMSw5LjgxLDMuNywxOS42NiwxMS45NiwyNS44MWMxMS43MSw4LjUzLDI1LjU1LDExLjA1LDQxLjk4LDQuNzEKCQkJYzEyLjAzLTUuMSwxOS42My0xNi42NCwyMC43OC0zMC44NGMwLjUzLTI3LjA1LTE4LjY4LTMzLjIyLTE5LjE1LTM1LjAzIE0zMDAuMzksNDcuODZjMC4yNi0wLjY5LDEuNjktMS4xMSwzLjMyLTAuNzUKCQkJYzEuNzUsMC40NiwzLjc4LDEuMDksNC43MiwzLjA0YzAsMCwxLjA3LDEuOC0xLjU1LDEuNzRjLTAuOTItMC4wMi01LjM1LTAuMjUtNi42Mi0zLjEyYy0wLjA0LTAuMjMsMC0wLjQyLDAuMDgtMC41NwoJCQlDMzAwLjM0LDQ4LjA4LDMwMC4zNSw0Ny45NiwzMDAuMzksNDcuODZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMzNi4xNyw4NC40Yy0wLjI0LTQuMjksMy4wNi03LjY2LDcuMTgtNy44OWM0LjA4LTAuMjMsNy43NCwyLjczLDcuOTgsNy4wM2MwLjI1LDQuMzQtMy4wNSw3LjcxLTcuMTMsNy45NAoJCQlDMzQwLjA5LDkxLjcsMzM2LjQyLDg4LjczLDMzNi4xNyw4NC40eiBNMzQ0LjEzLDkwLjIyYzMuMzgtMC4xOSw1LjktMyw1LjctNi42Yy0wLjItMy41NC0zLjAzLTYuMDYtNi40MS01Ljg3CgkJCWMtMy40MywwLjItNS45NSwzLjAyLTUuNzUsNi41NkMzMzcuODgsODcuOTIsMzQwLjcxLDkwLjQxLDM0NC4xMyw5MC4yMnogTTM0Mi40NCw4OC4zOWwtMS4zMSwwLjA3bC0wLjQ5LTguNjNsMy4yOS0wLjE5CgkJCWMyLjA0LTAuMTIsMy4wOSwwLjU4LDMuMTksMi4yOGMwLjA5LDEuNTQtMC44NSwyLjI3LTIuMSwyLjVsMi42NywzLjY2bC0xLjQ2LDAuMDhsLTIuNDktMy42MWwtMS41MSwwLjA4TDM0Mi40NCw4OC4zOXoKCQkJIE0zNDMuNzMsODMuNDVjMS4xMS0wLjA2LDIuMDktMC4yLDIuMDItMS41MmMtMC4wNi0xLjA3LTEuMDQtMS4yMS0xLjk1LTEuMTZsLTEuNzksMC4xbDAuMTYsMi42N0wzNDMuNzMsODMuNDV6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4MSw3Ni4zM2MtMC4yOC0xLjYtMi41Ny0yLjA0LTIuODgtMy40Yy0wLjEyLTAuNzUtMC4yMS0xLjQ3LTAuMy0yLjE5bC0xLjIzLTIxLjE3bC0wLjItMC42CgkJCWMtMC4yNS00LjQtMi44NS04LjI3LTYuOTgtOS41M2wtMi42Ni0wLjZjLTkuMzYtMS4xMi0xNC42NywyLjc1LTE2LjYyLDMuOTdMMjUwLjExLDQxbC0xNS4zMywwLjg0YzAsMC0wLjEzLDMuNjksMC42Miw0Ljc5CgkJCWMwLjc1LDEuMTEsMi45MiwxLjM2LDMuNDgsMi44OGwxLjEsMTAuNzdjMC4xMSwyLjAyLDEuMzYsMTQuMjMtMC4wNCwxNS40MWMwLDAtMC44OCwwLjYyLTEuODYsMS42CgkJCWMtMC44NCwxLjUyLTAuNjEsMy4wNSwwLjAyLDQuNDhsMjAuMTUtMS4wNWMwLDAsMC40Mi0xLjA0LDAtMy4zMWMtMC4yNy0xLjYtMy4wNS0yLjI0LTMuMzYtMy42MWMwLDAtMS4xLTE5LjgxLTEuMTEtMTkuOTQKCQkJYy0wLjEyLTIuMTUsMS42Ny00LDMuOTktNC4xM2MyLTAuMTEsNC4wOSwxLjEyLDQuMiwzLjA5YzAuMDIsMC4yOCwxLjA5LDIxLjA5LDEuMDksMjEuMDlzLTEuMjUsMS4zMi0yLjIzLDIuMwoJCQljLTAuODMsMS41Mi0wLjYxLDMuMDUsMC4wMyw0LjQ4bDIwLjExLTEuMjVDMjgwLjk2LDc5LjQ1LDI4MS40Myw3OC42LDI4MSw3Ni4zM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjc1LjAxLDEzNy45NmMtMC41Ni0wLjE1LTAuNTIsMC41OC0wLjg4LDAuNzhjLTEuMDYsMC42Mi0yLjQ1LDEuOTQtNC41MiwxLjM3CgkJCWMtMi4wOC0wLjU3LTIuNDgtMS41MS0yLjczLTIuNzlsLTEuMTQtMTkuNGwwLjAxLDAuMDFsLTEuOTYtMzUuMzJsLTE4Ljg1LDEuMTNjMCwwLTAuMTQsMy42OSwwLjYyLDQuNzkKCQkJYzAuNjcsMC45OCwyLjQ1LDEuMywzLjIzLDIuNDNsLTAuMTUtMC4wMWMwLDAsMi4yMywzNi4wNSwyLjIsMzguNzNjMC41OSwzLjgzLTQuMDQsMy42OC00LjI4LDEuNTEKCQkJYy0wLjEyLTEuMTQtMC41Mi03Ljk1LTAuNzYtMTEuOThsLTIuMDYtMzUuMzRsLTE4Ljc0LDEuMTVjMCwwLTAuMTMsMy42OSwwLjYyLDQuNzljMC43NCwxLjA5LDMuMSwxLjY5LDMuNjksMy4xNmwyLjM5LDM3LjkyCgkJCWMwLDAsMC4xLDEuNzItMS42OCwyLjg1Yy0xLjc3LDEuMTQtMS4xMyw0LjI5LTEuMDEsNi41YzIuMDItMC45Miw1LjYtMS4wOCw1LjYtMS4wOGMxMC43NC0xLjksMjAuODQsNC4xNSwzMS4xMSw2Ljg3CgkJCWMzLjE3LDAuNzQsNi42OSwxLjUsOS43NSwwLjQxTDI3NS4wMSwxMzcuOTZ6Ii8+Cgk8L2c+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTE3LjU1LDM3LjAzYy0wLjI1LTQuNDctNC4wOS03LjktOC41Ny03LjY0Yy0xLjQxLDAuMDgtMi42OSwwLjU1LTMuODEsMS4yNGMtMC4wNiwwLjAxLTAuMTMsMC4wMy0wLjE5LDAuMDMKCQljLTAuMzUsMC4xOC0wLjYzLDAuNDUtMC44NywwLjc1Yy0wLjQ2LDAuNC0wLjg2LDAuODUtMS4yMiwxLjM0Yy0wLjIxLDAuMTEtMC40NCwwLjE2LTAuNzQsMC4xbC0wLjI0LTQuMjRMNzkuNywyOS44NwoJCWMwLDAsMC4xNiwzLjE5LDAuNiw0LjQ1YzAuNTYsMS44LDQuNjMsMS44Myw0LjA5LDUuMTdjLTIuMTUsMTAuNjEtMy41OCwyMS45OC01Ljc0LDMyLjRsLTAuNDksMC4wMwoJCWMtMy4yLTEwLjgxLTYuMjUtMjEuOTYtOS4yNy0zMi4yMWMwLjA2LTIuOSwyLjUxLTIuMzUsMy42Ny00LjEyYzAuOC0yLjA3LDAuMzctNS4yMiwwLjM3LTUuMjJsLTIzLjc2LDEuMzZjMCwwLDAuMDEsMi4zMiwwLjMsNC4xNQoJCWMwLjQ5LDIuMTgsMy4xNSwxLjcsNCwzLjY4YzEuMDIsMy4yNiwyLjAxLDYuOTksMi4wMSw2Ljk5bC00LjAzLDI4LjkzYy0zLjQxLTExLjM5LTYuNjQtMjMuMjYtOS44My0zNC4xMQoJCWMtMC4xLTEuODMsMi40NC0zLjEzLDMuNjctNC4xMmMwLjgtMi4wNywwLjM3LTUuMjIsMC4zNy01LjIybC0yMy43NiwxLjM2YzAsMCwwLjAxLDIuMzIsMC4zLDQuMTRjMC40OSwyLjE4LDMuMTUsMS43MSw0LDMuNjgKCQljNC43MywxNS4xOCw4LjUyLDMxLjM2LDEyLjY5LDQ2LjM5bDkuMjQsMzIuOTVjMy42NS0zLjcsOC4wOS02LjUzLDEyLjE1LTkuNTJjMS4xNS04LjksMy43Ni0xNy44OCw0LjcyLTI2Ljk0CgkJYzAuMTYtMC4zOCwwLjEyLTEuMTEsMC42OC0wLjk2YzIuMDYsNy4wNiw0LjExLDEzLjkzLDYuMTgsMjEuMzVjNS4zNy0yLjcsMTAuOTItNS4yMiwxNi41LTcuMzhsNS4zNi0yOC42M2w0Ljc2LTI2LjIxCgkJYzAuNDMtMi4yMywwLjI3LTQuOTgsMi43OS01Ljg2bDAuMTQsMC4xMmMtMC4wNiwwLjQ3LTAuMDksMC45NS0wLjA2LDEuNDRjMC4xNiwyLjg0LDEuNzcsNS4yNSw0LjA3LDYuNTcKCQljMS4wOCwwLjcxLDIuMzEsMS4xNiwzLjU1LDEuMThjMi4yMiwwLjI0LDQuMzgtMC42Miw1Ljk1LTIuMThjMC4yMi0wLjIsMC4zOC0wLjQxLDAuNTYtMC42MWMwLjAxLTAuMDEsMC4wMy0wLjAzLDAuMDQtMC4wNAoJCWMxLjA1LTEuMTYsMS42Ny0yLjQ3LDEuODktMy45M2MwLjA0LTAuMjUsMC4wNy0wLjUsMC4wOS0wLjc1YzAuMDEtMC4xMSwwLjA0LTAuMjIsMC4wNC0wLjMzYzAtMC4wNS0wLjAyLTAuMDgtMC4wMi0wLjEzCgkJQzExNy41MywzNy40OSwxMTcuNTcsMzcuMjcsMTE3LjU1LDM3LjAzeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyMi4yOSw4Mi40N2MtMC40LTAuNTMtMi4wNy0wLjgtMi4zMy0yLjA3bC0xLjc4LTMyLjgyaDBWNDcuNWwtMTguNTcsMS4wMmMwLDAtMC4xMywzLjY5LDAuNjIsNC43OQoJCWMwLjIyLDAuMzMsMC41OSwwLjU4LDAuOTksMC44MmMwLjUzLDAuNDIsMS4xMSwwLjcyLDEuNTcsMC45M2MwLjMzLDAuMjUsMC42MSwwLjUzLDAuOCwwLjlsMC41Niw4LjQ0bDEuMDQsMTkuMzEKCQljLTAuNDMsMC41Mi0xLjM2LDEuNi0yLjAzLDIuMDVjLTEuMzQsMi4yOS0wLjY4LDQuMjctMC43MSw2Ljg1YzcuMjQtMi4wNywxMy44MS0yLjk5LDIxLjQ4LTMuOTgKCQlDMTIzLjQ0LDg2LjQ1LDEyNC43Myw4My4yNSwxMjIuMjksODIuNDd6Ii8+CjwvZz4KPC9zdmc+Cg==",
                    alt: "Service"
                }
            }}
            utilities={[
                {
                    type: "button",
                    text: "Admin",
                    href: "/admin",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "Accounting",
                    href: "/accounting",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "Partnership",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "Festivals",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "VS",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "Mail",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "HR",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "Marketing",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "Sales",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    text: "IT",
                    href: "https://example.com/",
                    external: false,
                    externalIconAriaLabel: ""
                },
                {
                    type: "button",
                    iconName: "notification",
                    title: "Notifications",
                    ariaLabel: "Notifications (unread)",
                    badge: true,
                    disableUtilityCollapse: false
                },
                {
                    type: "menu-dropdown",
                    iconName: "settings",
                    ariaLabel: "Settings",
                    title: "Settings",
                    items: [
                        {
                            id: "settings-org",
                            text: "Under-Construction"
                        }
                    ]
                },
                {
                    type: "menu-dropdown",
                    text: "Daniel",
                    description: "daniel@wisdells.com",
                    iconName: "user-profile",
                    items: [
                        { id: "profile", text: "Profile" },
                        { id: "preferences", text: "Preferences" },
                        {
                            id: "support-group",
                            text: "Quick Links",
                            items: [
                                {
                                    id: "documentation",
                                    text: "iSolved",
                                    href: "#",
                                    external: true,
                                    externalIconAriaLabel:
                                        " (opens in new tab)"
                                },
                                {
                                    id: "WisDells",
                                    text: "WisDells",
                                    href: "www.wisdells.com",
                                    external: true,
                                    externalIconAriaLabel:
                                        " (opens in new tab)"
                                }
                            ]
                        },
                        { id: "signout", text: "Sign out" }
                    ]
                }
            ]}
        />
    );
}