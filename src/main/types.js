/**
 * A type containing two {@link PropertyDescriptor}s, one for the original and one for the advised.
 *
 * @typedef {Object} Descriptors
 * @property {PropertyDescriptor} original The original {@link PropertyDescriptor}.
 * @property {PropertyDescriptor} advised The new, advised {@link PropertyDescriptor}.
 */

/**
 * A type representing the information available at static analysis time, before your code executes.
 *
 * @typedef {Object} ThisJoinPointStaticPart
 * @property {Object|Function} clazz The class object of the joinpoint as given by the JavaScript decorator implementation.
 * @property {String} name The name given by the JavaScript decorator implementation; for properties, it is just the property's name without the `get ` or `set ` prefix.
 * @property {Descriptors} descriptors The `original` & `advised` {@link PropertyDescriptor}s.
 * @property {Boolean} accessor `true` if the joinpoint represents a JavaScript accessor (get or set method).
 */

/**
 * @callback Proceed
 * @param {Object} arg The object argument to be deconstructed.
 * @param {Object} arg.thiz A value for the `this` reference in the advised method.
 * @param {Array<*>} arg.args An array of arguments that the advised method will be called with; defaults to `thisJoinPoint.args`.
 */

/**
 * A type representing the information available at run time for a particular joinpoint, including static, instance, and parameter information.
 * @typedef {Object} ThisJoinPoint
 * @extends ThisJoinPointStaticPart
 * @property {Object} thiz The context of the joinpoint; it is either the class instance of the joinpoint, or a class if your joinpoint targets a static method.
 * @property {Boolean} static If `true`, then the context of the joinpoint is a static method, else it's `false`.
 * @property {String} fullName This property has the same value as `thisJoinPoint.name`, except when the joinpoint is an accessor, in which case it's `get ${thisJoinPoint.name}` or `set ${thisJoinPoint.name}`.
 * @property {Array<*>} args The arguments passed to the advised method, as an array.
 * @property {Proceed} proceed A function that is only present if using `Around` or `AsyncAround` advice, providing you the ability to allow execution to proceed into the advised method.
 * It takes a single object argument with optional keys:
 * * `thiz`: a value for the this reference in the advised method; defaults to the value of `thisJoinPoint.thiz`.
 * * `args`: an array of arguments that the target advised will be called with; defaults to the value of `thisJoinPoint.args`.
 * @property {String} get Equal to thisJoinPoint.fullName if the invocation is of the `get` method of the accessor.
 * @property {String} set Equal to `thisJoinPoint.fullName` if the invocation is of the `set` method of the accessor.
 */
