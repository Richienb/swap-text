import test from "ava"
import swapText from "."

test("main", (t) => {
    t.is(swapText("abcdef", "ab", "cd"), "cdabef")
})
