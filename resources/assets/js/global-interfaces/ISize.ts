interface ISize<ValueType, MeasureName>{
    value: ValueType,
    readonly measure: MeasureName,
}

// ----------------------------------------------------------------------------
// Export
// ----------------------------------------------------------------------------

export {ISize};