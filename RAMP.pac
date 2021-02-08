function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, 'ranking.rakuten.co.jp')) return 'PROXY stg.checkproxy.rakuten-it.com:9502';

    // RUNA
    if (dnsDomainIs(host, 's-cdn.rmp.rakuten.co.jp')) return 'PROXY stg.checkproxy.rakuten-it.com:9502';

    // RAT Web UI
    if (dnsDomainIs(host, 'rat.intra.rakuten-it.com')) return 'DIRECT';

    var isInternalDomain = [
        'r10s.jp',
        'rakuten.co.jp',
        'giantpanda.intra.rakuten-it.com',
        'felix.intra.rakuten-it.com',
        'stg.jp.local',
    ].some(function(internalDomain) {
        return dnsDomainIs(host, internalDomain);
    });

    if (isInternalDomain) {
        return 'PROXY stg.checkproxy.rakuten-it.com:9502';
    }

    return 'DIRECT';
}
