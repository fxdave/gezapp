import React from 'react';

export default function AsyncResource({ resource, loading, empty, loaded }: { resource: { data: Array<Object>, loading: false }, loading, empty, loaded }) {
    if (resource.loading) return loading
    if (!resource.data.length) return empty
    return loaded
}
