import { exactCollation, type Collation, type ResultType } from ".";

export function atLeastCollation(raw: ResultType): Collation {
    const collation = exactCollation(raw)
    let prev = 0
    for (const result of [...collation.data.keys()].reverse()) {
        prev += collation.data.get(result) || 0
        collation.data.set(result, Math.min(prev, 1))
    }
    return collation
}